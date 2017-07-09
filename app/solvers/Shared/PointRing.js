 

export default function PointRing(pointCount, size=1) {

  const points = [];
  var angle;
  var step = (Math.PI * 2) / pointCount;
  var qPi = Math.PI / 2;

  for (let i = 0; i < pointCount; i++) {
    angle = (i * step) - qPi;
    points.push([size*Math.cos(angle), size*Math.sin(angle)])
  } 

  return points;

}

