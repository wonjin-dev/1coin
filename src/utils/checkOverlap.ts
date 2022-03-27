// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkOverlap = (origin: any, key?: string): boolean => {
// eslint-disable-next-line prefer-const
  let origins = [];
  for(let i=0; i<origin.length; i++){
    origins.push(origin[i].id);
  }
  const check = origins.indexOf(key);
  if(check < 0){
    return false;
  } else {
    return true;
  }
}

export default checkOverlap;