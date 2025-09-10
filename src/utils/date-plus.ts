/*
 * Ensure this file is treated as a module so that the `declare global` works
 * and the extended function is recognized by the Date type globally.
 */
export {};

declare global {
  interface Date {
    plus(options: PlusOptions): Date;
  }
}

type PlusOptions = {
  months?: number;
  days?: number;
  hours?: number;
  mins?: number;
  secs?: number;
  ms?: number;
};

Date.prototype.plus = plus;

function plus(this: Date, options: PlusOptions): Date {
  const date = new Date(this.getTime());
  if (options.months) date.setMonth(date.getMonth() + options.months);
  if (options.days) date.setDate(date.getDate() + options.days);
  if (options.hours) date.setHours(date.getHours() + options.hours);
  if (options.mins) date.setMinutes(date.getMinutes() + options.mins);
  if (options.secs) date.setSeconds(date.getSeconds() + options.secs);
  if (options.ms) date.setMilliseconds(date.getMilliseconds() + options.ms);
  return date;
}
