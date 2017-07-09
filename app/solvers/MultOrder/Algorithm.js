
export function Steps (a, m, t) {

  // a - number
  // m - modulo
  // t - target
  // i - iterate
  // c - candidate

  if (typeof(t) !== 'number') { 
    t = 1 
  }

  let k = 0;
  let c = 1;
  const path = [];

  while(path[c] === undefined) {
    let nextC = (c*a) % m;
    path[c] = nextC;
    c = nextC;
  }

  return path;

}


