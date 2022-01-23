// objective that needs to be minimized
obj = function (x) {
  return (x[0]-1.0)*(x[0]-1.0) + (x[1]+0.5)*(x[1]+0.5) + (x[2]+2.0)*(x[2]+2.0)
}


// initial values
var x0 = [1.2, 2.0, -3.1]


// Solve!
var solution = optimjs.minimize_Powell(obj, x0)


alert("variables = " + solution.argument + "\n\n objective = " + solution.fncvalue)
