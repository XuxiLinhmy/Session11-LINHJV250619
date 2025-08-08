let numberA = +prompt('Mời bạn nhập vào số a:');
let numberB = +prompt('Mời bạn nhập vào số b:');

let operation = prompt('Mời bạn nhập vào các phép tính (+,-,*,/)');
switch(operation){
    case "+":
        alert("kết quả là:" +(numberA + numberB));
        break;
    case "-":
        alert("kết quả là:" +(numberA - numberB));
        break;
    case "*":
        alert("kết quả là:" +(numberA * numberB));
        break;
    case "/":
        alert("kết quả là:" +(numberA / numberB));
        break;
    default:
        alert("phép tính không thể thực hiện");
        break;
}