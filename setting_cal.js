/********************設定の関数(settings.html)********************/
window.onload = function() {
    
    var height = "173";
    var weight = "67";
    var bmi = "22.39";
    var age = "22";
    var gender = "男";

    var maxHP_num = "2";
    var maxcure_num = "1";
    var maxjump_num = "4";
    var total_point = "3200";

    document.getElementById('height').textContent = height + " cm";
    document.getElementById('weight').textContent = weight + " kg";
    document.getElementById('bmi').textContent = bmi;
    document.getElementById('age').textContent = age+ "歳";
    document.getElementById("gender").textContent = gender;

    document.getElementById('maxHP_num').textContent = "所持数:" + maxHP_num;
    document.getElementById('maxcure_num').textContent = "所持数:"+ maxcure_num;
    document.getElementById("maxjump_num").textContent = "所持数:" + maxjump_num;
    document.getElementById("total_point").textContent = total_point;

}

function settings_change() {

    var height_new = parseInt(document.getElementById('height_new').value);
    var weight_new = parseInt(document.getElementById('weight_new').value);
    var age_new = parseInt(document.getElementById('age_new').value);
    var gender_new = parseInt(document.getElementById('gender_new').value);

    var bmi = (weight_new) / (height_new * height_new * 0.0001);

    document.getElementById('height').textContent = height_new + " cm";
    document.getElementById('weight').textContent = weight_new + " kg";
    document.getElementById('bmi').textContent = bmi.toFixed(2);
    document.getElementById('age').textContent = age_new + "歳";

    if(gender_new == 1){
        document.getElementById("gender").textContent = "男";
    }
    else if(gender_new == 2){
        document.getElementById("gender").textContent = "女";
    }
    else{
        document.getElementById("gender").textContent = "その他";
    }

}