function multiply()
{
        num1 = document.getElementById("firstNumber").value;
 
        document.getElementById("result").innerHTML = ((num1)* (num1) * Math.PI);
        var1 = document.getElementById("size").value;
        var2 = document.getElementById("color").value;
        document.getElementById("result2").innerHTML = var1 + "  "+ var2;
}
