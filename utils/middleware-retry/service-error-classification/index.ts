
import {
  CLOCK_SKEW_ERROR_CODES,
  THROTTLING_ERROR_CODES,
  THROTTLING_ERROR_STATUS_CODE,
  TRANSIENT_ERROR_CODES,
  TRANSIENT_ERROR_STATUS_CODES,
} from "./constants";

export const isRetryableByTrait = (error: any) => error.$retryable !== undefined;

export const isClockSkewError = (error: any) => CLOCK_SKEW_ERROR_CODES.includes(error.name);

export const isThrottlingError = (error: any) =>
  error.response?.status === THROTTLING_ERROR_STATUS_CODE ||
  THROTTLING_ERROR_CODES.includes(error.name) ||
  error.$retryable?.throttling == true;

export const isTransientError = (error: any) =>
  TRANSIENT_ERROR_CODES.includes(error.name) ||
  TRANSIENT_ERROR_STATUS_CODES.includes(error.response?.status || 0);