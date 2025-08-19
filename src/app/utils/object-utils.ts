/**
 * Returns true only if not null or undefined and cast it as object type
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Returns true only if undefined
 */
export function isUndefined<T>(value: T | undefined): boolean {
  return value === undefined;
}

/**
 * Returns whether the value is truthy
 */
export function isTruthy<T>(value: T | null | undefined): boolean {
  return Boolean(value);
}

/**
 * Returns whether the value is falsy
 */
export function isFalsy<T>(value: T | null | undefined): boolean {
  return !isTruthy(value);
}

/**
 * Returns whether the value is false
 */
export function isFalse<T>(value: T | boolean | null | undefined): value is false {
  return value === false;
}

/**
 * Returns whether the string is not empty
 */
export function stringHasValue(value: string | null | undefined): value is string {
  return value !== null && value !== undefined && value !== '';
}
