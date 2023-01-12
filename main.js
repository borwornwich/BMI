document.getElementById("calculator+").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert(sum)
});
document.getElementById("calculator-").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert(sum)
});
document.getElementById("calculatorx").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert(sum)
});
document.getElementById("calculator/").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert(sum)
});
function myalert(){
    // var num1 = document.getElementById("num1").value;
    // var num2 = document.getElementById("num2").value;
    // var sum = parseInt(num1)/parseInt(num2);
    // document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert("hello")
}
const img = document.createElement("img")
img.src = "img/6439010051.jpg";
img.style.width = "200px";
document.getElementById("mydiv").appendChild(img);

function bmi(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var hight = parseInt(num2)/100;
    var hight = parseFloat(hight)*parseFloat(hight);
    var sum = parseInt(num1) / parseFloat(hight);
    // document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum.toFixed(2);
    alert(sum)
}
