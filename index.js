function main() {
  var base = CSG.cube({
    center: [26, 3.5, -0.5],
    radius: [26, 3.5, 0.5]
  })

  var width = 52;
  var depth = 7;
  var maxHeight = 10

  for (var m = 0; m < width; m++) {
    for (var i = 0; i < depth; i++) {
      var height = Math.random()*maxHeight
      var day = CSG.cube({
        center: [m+0.5, i+0.5, height],
        radius: [0.5, 0.5, height]
      });

    base = base.union(day)
    }
  }
  return base;
}
