import { isThrottlingError } from "./service-error-classification";
import { FinalizeHandler, RetryStrategy } from "./types";

import {
    DEFAULT_MAX_ATTEMPTS, 
    RETRY_MODES,
    DEFAULT_RETRY_DELAY_BASE,
    // INITIAL_RETRY_TOKENS,
//   INVOCATION_ID_HEADER,
//   REQUEST_HEADER,
  THROTTLING_RETRY_DELAY_BASE,
} from "../constants";
// import { getDefaultRetryQuota } from "./defaultRetryQuota";
import { defaultDelayDecider } from "./types/delayDecider";
import { defaultRetryDecider } from "./types/retryDecider";
import { DelayDecider, RetryDecider } from "./types";

/**
 * Strategy options to be passed to StandardRetryStrategy
 */
export interface StandardRetryStrategyOptions {
  retryDecider?: RetryDecider;
  delayDecider?: DelayDecider;
}

export class StandardRetryStrategy implements RetryStrategy {
  private retryDecider: RetryDecider;
  private delayDecider: DelayDecider;
  public mode: string = RETRY_MODES.STANDARD;

  constructor(private readonly maxAttemptsProvider: number, options?: StandardRetryStrategyOptions) {
    this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
    this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
  }

  private shouldRetry(error: Error, attempts: number, maxAttempts: number) {
    return attempts < maxAttempts && this.retryDecider(error);
  }

  private async getMaxAttempts() {
    return this.maxAttemptsProvider || DEFAULT_MAX_ATTEMPTS;
  }

  async retry<Input extends object, Ouput extends object>(
    next: FinalizeHandler<Input, Ouput>,
    args: Input,
  ) {
    let attempts = 0;
    let totalDelay = 0;

    const maxAttempts = await this.getMaxAttempts();
    while (true) {
      try {
        const response: any = await next(args);
        response.$metadata = { attempts: attempts + 1, totalRetryDelay: totalDelay};
        return response;
      } catch (err) {
        attempts++;
        if (this.shouldRetry(err, attempts, maxAttempts)) {
          const delay = this.delayDecider(
            isThrottlingError(err) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE,
            attempts
          );
          totalDelay += delay;

          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        if (!err.$metadata) {
          err.$metadata = {};
        }

        err.$metadata.attempts = attempts;
        err.$metadata.totalRetryDelay = totalDelay;
        throw err;
      }
    }
  }
}