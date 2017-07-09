
export function Pairs (t, m) {

  // t - target
  // m - modulo
  // i - iterate
  // c - candidate

  if (typeof(t) !== 'number') { 
    console.log('nope');
    t = 1 
  }

  const pairs = [];

  for (let i=0; i<m; i++) {
    for (let c=0; c<m; c++) {
      if (((c*i) % m) == t) {
        pairs.push([i,c]);
      }
    }
  }

  return pairs;

}


