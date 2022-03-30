export const onSet = (key: string, newValue: any, isReset:boolean | undefined) => {
  isReset
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, JSON.stringify(newValue));
};