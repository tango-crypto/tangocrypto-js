import {
    isClockSkewError,
    isRetryableByTrait,
    isThrottlingError,
    isTransientError,
  } from "../service-error-classification";
  
  export const defaultRetryDecider = (error: Error) => {
    if (!error) {
      return false;
    }
  
    return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
  };