const pi = 3.14159265359;

function circleArea(radius){
    const area = pi * Math.pow(radius,2);
    console.log("Area of the circle:",area);
}

function circleCircumference(radius){
    const circumference = 2 * pi * radius;
    console.log("Circumference of the circle:",circumference);
}

module.exports={
    circleArea,
    circleCircumference
}
