function show(number1, number2, number3)
{
    let side1 = parseInt(number1);
    let side2 = parseInt(number2);
    let side3 = parseInt(number3);
    side1=Number(document.getElementById("side1"));
    side2=Number(document.getElementById("side2"));
    side3=Number(document.getElementById("side3"));
    
    var perimeter = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
    alert(area);
    return area;
}
