let weight = Number(prompt('Mời bạn nhập vào cân nặng:'));
let height = Number(prompt('Mời bạn nhập vào chiều cao:'));

let bmi = weight/(height*height);
if ( bmi < 18.5 ){
    alert('Cân nặng thấp(gầy)');
} else if ( bmi > 18.5 && bmi <= 24.9){
    alert('Bình thường');
} else if ( bmi >= 25){
    alert('Thừa cân');
} else if ( bmi >25 && bmi <=29.9){
    alert('Tiền béo phì');
} else if ( bmi >= 30 && bmi<=34.9){
    alert('Béo phì độ I');
} else if ( bmi >= 35 && bmi <= 39.9){
    alert('Béo phì độ II');
} else if ( bmi >=40){
    alert('Béo phì độ III');
}