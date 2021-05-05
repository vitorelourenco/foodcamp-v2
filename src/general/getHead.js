export default function getHead(currentObj, headSelector){
  while (currentObj.tagName !== headSelector){
    currentObj = currentObj.parentNode;
  }
  return currentObj;
}
