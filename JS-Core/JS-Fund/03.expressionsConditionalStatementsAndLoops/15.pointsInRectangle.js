function pointsInRectangle([x,y,xMin,xMax,yMin,yMax]) {
    let position = (x <= xMax && x >= xMin) && (y <= yMax && y >= yMin) ? "inside" : "outside";
    console.log(position);
}
pointsInRectangle([8,-1,2,12,-3,3]);

pointsInRectangle([12.5,-1,2,12,-3,3])