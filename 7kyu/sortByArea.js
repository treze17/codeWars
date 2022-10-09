function sortByArea(array) {
  const area=r=>Array.isArray(r)?r[0]*r[1]:r*r*Math.PI;
  return [...array].sort((a,b)=>area(a)-area(b));
}