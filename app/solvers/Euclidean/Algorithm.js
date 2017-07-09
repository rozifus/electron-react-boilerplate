
const BIG = 0;
const SMALL = 1;
const QUO = 2;
const REM = 3;

function EucPoints() {
  return {
    green: [],
    red: [],
    blue: [],
    grey: []
  }
}

function deriveEucPoints(eucPoints, newBase) {

  const addNewBase = p => p + newBase;
  
  const res = EucPoints();

  res.green = eucPoints.green.map( addNewBase );
  res.red   = eucPoints.red.map( addNewBase );
  res.blue  = eucPoints.blue.map( addNewBase );
  res.grey  = eucPoints.grey.map( addNewBase );

  return res;

}

export function Steps (big, small) {

  const steps = [];

  let b = big;
  let s = small;
  let q, r;

  while (r != 0) {
    q = Math.floor( b / s );
    r = b % s;

    steps.push([b, s, q, r]);

    b = s;
    s = r;
  }

  return steps;

}

export function PointsForSteps (steps) {

  const allPoints = [];

  for(let step of steps) {

    const stepPoints = [];

    for(let i = 0; i <= step[0]; i += step[1]) {

      stepPoints.push(i)

    }

    allPoints.push(stepPoints);

  }

  return allPoints

}

function genLayerBase(step) {

  const layer = EucPoints(); 

  let i = 0;
  for(i = 0; i + step[1] <= step[0]; i += step[1]) {
    layer.green.push(i);
  }

  if (i < step[0]) {
    layer.red.push(i)
  }

  return layer;

}


export function BuildPointsToStep (steps, targetStep) {

  if (targetStep < 0) {
    return [];
  }
  
  const layers = [];

  const built = [];

  let step = steps[0];
  let prev;

  let layer = genLayerBase(step);

  layers.push(layer);

  for (let t = 1; t <= targetStep; t++) {

    step = steps[t];
    prev = layer;
    layer = EucPoints();

    const layerBase = genLayerBase(step);
   
    for(let g of prev.green) {
      let sub = deriveEucPoints(layerBase, g);
      layer.green.push.apply(layer.green, sub.green);
      layer.red.push.apply(layer.red, sub.red); 
    }
    
    for(let r of prev.red) {
      layer.green.push(r);
    }

    layers.push(layer);

  }

  return layers;

}

export function DiscretizePoints(layers, steps) {

    const discrete = [];
    let layer;
    let step;
    const m = steps[0][0];

    for(let i = 0; i < layers.length; i++) {
      layer = layers[i];
      step = steps[i];
      const disc = EucPoints();
      for(let g of layer.green) {
        disc.green.push([g, (g+step[1]) % m]);
      }
      for(let r of layer.red) {
        disc.red.push([r, (r+step[3]) % m]);
      }
      discrete.push(disc);
    }
    return discrete;

}

export function FlattenSteps(layers, steps, targetStep) {

  const flat = EucPoints();

  let i = 0;
  for(let layer of layers) {
 
    let green, red;

    if (i === targetStep) {
      flat.green = flat.green.concat(layer.green)
      flat.red   = flat.red.concat(layer.red)
    } else if (i === targetStep - 1) {
      flat.blue  = flat.blue.concat(layer.green)
      flat.green = flat.green.concat(layer.red)
    } else if (i === targetStep - 2) {
      flat.grey  = flat.grey.concat(layer.green)
      flat.blue  = flat.blue.concat(layer.red)
    } else {
      flat.grey  = flat.grey.concat(layer.green).concat(layer.red)
    }

    i++;
  }

  return flat
}


export function DEP_FlattenSteps(layers, steps, targetStep) {

  const flat = EucPoints();

  let i = 0;
  for(let layer in layers) {
  
    let red, green;
    if (i === targetStep) {
      green = flat.green;
      red = flat.red;
    } else if (i === targetStep - 1) {
      green = flat.blue;
      red = flat.green; 
    } else if (i === targetStep - 2) {
      green = flat.grey;
      red = flat.blue;
    } else {
      green = flat.grey;
      red = flat.grey;
    }

    for(let g in layer.green) {
      green.push(g);
    }

    for(let r in layer.red) {
      red.push(r);
    }

    i++;

  }

  return flat

}


