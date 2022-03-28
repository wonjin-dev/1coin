// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkOverlap = <T extends any[]>(
  arg: {
    origin: T;
    new: string;
    key: string;
  },
): boolean => {
  const result = arg.origin.some(item => item[arg.key] === arg.new);
  return result
}