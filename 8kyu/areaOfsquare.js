// Complete the function that calculates the area of the red square,

// when the length of the circular arc A is given as the input. 

// Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language
//  (Math::PI, M_PI, math.pi, etc)


//SOLUTiON
function squareArea(A){
    let c = A * 4;
    let radius = (c)/(2 * Math.PI);
    let area = (radius * radius)
    return Math.round(area*100)/100
   }
   