export {};

declare global {
  type Z = (targetLength?: number) => string;
  interface String {
    /**
     * Zero-pad a string to a given length.
     *
     * A syntactic sugar or wrapper function for `.toString().padStart()`
     *
     * Default length is 2.
     */
    padZero: Z;
    z: Z;
  }
  interface Number {
    /**
     * Zero-pad a number to a given length.
     *
     * A syntactic sugar or wrapper function for `.toString().padStart()`
     *
     * Default length is 2.
     */
    padZero: Z;
    z: Z;
  }
}

String.prototype.padZero = implementPadZero;
Number.prototype.padZero = implementPadZero;
String.prototype.z = implementPadZero;
Number.prototype.z = implementPadZero;

// * Implementation
function implementPadZero(this: string | number, targetLength = 2) {
  const str = String(this); // ensures primitive
  if (str.length >= targetLength) return str;
  return '0'.repeat(targetLength - str.length) + str;
}
