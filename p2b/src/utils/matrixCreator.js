export const matrixCreator = photos => {
  var matrix = [];
  var idx = 0;
  var rowCount = 8;
  for (var i = 0; i < Math.ceil(photos.length / 8); i++) {
    var row = [];
    if (i + 1 === Math.ceil(photos.length / 8))
      rowCount = photos.length % 8 || 8;
    for (var j = 0; j < rowCount; j++) {
      row.push(photos[idx]);
      idx++;
    }
    matrix.push(row);
  }
  return matrix;
};
