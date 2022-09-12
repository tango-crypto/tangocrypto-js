/**
 * Determines whether an error is retryable based on the number of retries
 * already attempted, the HTTP status code, and the error received (if any).
 *
 * @param error         The error encountered.
 */
export interface RetryDecider {
    (error: Error): boolean;
}

/**
 * Determines the number of milliseconds to wait before retrying an action.
 *
 * @param delayBase The base delay (in milliseconds).
 * @param attempts  The number of times the action has already been tried.
 */
export interface DelayDecider {
    (delayBase: number, attempts: number): number;
}

/**
 * Interface that specifies the retry quota behavior.
 */
export interface RetryQuota {
    /**
     * returns true if retry tokens are available from the retry quota bucket.
     */

    /**
     * returns token amount from the retry quota bucket.
     * throws error is retry tokens are not available.
     */
    retrieveRetryTokens: (error: Error) => number;

    /**
     * releases tokens back to the retry quota.
     */
    releaseRetryTokens: (releaseCapacityAmount?: number) => void;
}

export interface RateLimiter {
    /**
     * If there is sufficient capacity (tokens) available, it immediately returns.
     * If there is not sufficient capacity, it will either sleep a certain amount
     * of time until the rate limiter can retrieve a token from its token bucket
     * or raise an exception indicating there is insufficient capacity.
     */
    getSendToken: () => Promise<void>;

    /**
     * Updates the client sending rate based on response.
     * If the response was successful, the capacity and fill rate are increased.
     * If the response was a throttling response, the capacity and fill rate are
     * decreased. Transient errors do not affect the rate limiter.
     */
    updateClientSendingRate: (response: any) => void;
}

export interface RetryStrategy {
    /**
     * The retry mode describing how the retry strategy control the traffic flow.
     */
    mode?: string;
    /**
     * the retry behavior the will invoke the next handler and handle the retry accordingly.
     * This function should also update the $metadata from the response accordingly.
     * @see {@link ResponseMetadata}
     */
    retry: <Input extends object, Output extends object>(next: FinalizeHandler<Input, Output>, args: Input) => Promise<Output>;
}

export interface InitializeHandlerArguments<Input extends object> {
    /**
     * User input to a command. Reflects the userland representation of the
     * union of data types the command can effectively handle.
     */
    input: Input;
}

export interface InitializeHandlerOutput<Output> {
    output: Output;
}


export interface FinalizeHandler<Input extends object, Output extends object> {
    /**
     * Asynchronously converts an input object into an output object.
     *
     * @param args  An object containing a input to the command as well as any
     *              associated or previously generated execution artifacts.
     */
    (args: Input): Promise<Output>;
}