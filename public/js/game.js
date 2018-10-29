function show(number1, number2, number3)
{
    let side1 = parseInt(number1);
    let side2 = parseInt(number2);
    let side3 = parseInt(number3);
    side1=Number(document.getElementById('side1') ? parseInt(document.getElementById('side1').value):side1);
    side2=Number(document.getElementById('side2') ? parseInt(document.getElementById('side2').value):side2);
    side3=Number(document.getElementById('side3') ? parseInt(document.getElementById('side3').value):side3);
    
    //var perimeter = (side1 + side2 + side3)/2;
    
    //var area =  Math.sqrt(((side1 + side2 + side3)/2)*((((side1 + side2 + side3)/2)-side1)*(((side1 + side2 + side3)/2)-side2)*(((side1 + side2 + side3)/2)-side3)));
    if(document.getElementById('result'))
    {
        document.getElementById('result').value = Math.sqrt(((side1 + side2 + side3)/2)*((((side1 + side2 + side3)/2)-side1)*(((side1 + side2 + side3)/2)-side2)*(((side1 + side2 + side3)/2)-side3)));
    }
    //alert(Math.sqrt(((side1 + side2 + side3)/2)*((((side1 + side2 + side3)/2)-side1)*(((side1 + side2 + side3)/2)-side2)*(((side1 + side2 + side3)/2)-side3))));
    return Math.sqrt(((side1 + side2 + side3)/2)*((((side1 + side2 + side3)/2)-side1)*(((side1 + side2 + side3)/2)-side2)*(((side1 + side2 + side3)/2)-side3)));
}
