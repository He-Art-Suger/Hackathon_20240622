/********************食事管理の関数(eat.html)********************/
window.onload = function() {
    
    var key_a = "鶏肉";
    var key_b = "卵";
    var key_c = "納豆";
    var protein_array = [30, 10, 7];
    var fat_array = [5, 10, 5];
    var ch_array = [50, 20, 15];
    var cal_array = [365, 210, 133];
    var gaincal_all = 708;
    var eat_sc = 20;

    var key_a_yd = "カレーライス";
    var key_b_yd = "ラーメン";
    var key_c_yd = "ハンバーガー";
    var protein_array_yd = [20, 20, 30];
    var fat_array_yd = [30, 100, 40];
    var ch_array_yd = [150, 200, 100];
    var cal_array_yd = [950, 1780, 880];
    var gaincal_all_yd = 3610;
    var eat_sc_yd = 0;

    document.getElementById('gaincal_all').textContent = gaincal_all + " kcal";
    document.getElementById('eat_menu_1').textContent = key_a;
    document.getElementById('eat_p_1').textContent = "タンパク質:" + protein_array[0] + " g";
    document.getElementById("eat_f_1").textContent = "脂質:" + fat_array[0] + " g";
    document.getElementById('eat_c_1').textContent = "炭水化物:" + ch_array[0] + " g";
    document.getElementById('eat_cal_1').textContent = cal_array[0] + " kcal";
    document.getElementById('eat_menu_2').textContent = key_b;
    document.getElementById('eat_p_2').textContent = "タンパク質:" + protein_array[1] + " g";
    document.getElementById("eat_f_2").textContent = "脂質:" + fat_array[1] + " g";
    document.getElementById('eat_c_2').textContent = "炭水化物:" + ch_array[1] + " g";
    document.getElementById('eat_cal_2').textContent = cal_array[1] + " kcal";
    document.getElementById('eat_menu_3').textContent = key_c;
    document.getElementById('eat_p_3').textContent = "タンパク質:" + protein_array[2] + " g";
    document.getElementById("eat_f_3").textContent = "脂質:" + fat_array[2] + " g";
    document.getElementById('eat_c_3').textContent = "炭水化物:" + ch_array[2] + " g";
    document.getElementById('eat_cal_3').textContent = cal_array[2] + " kcal";
    document.getElementById('eat_score').textContent = eat_sc;

    document.getElementById('gaincal_all_yd').textContent = gaincal_all_yd + " kcal";
    document.getElementById('eat_menu_1_yd').textContent = key_a_yd;
    document.getElementById('eat_p_1_yd').textContent = "タンパク質:" + protein_array_yd[0] + " g";
    document.getElementById("eat_f_1_yd").textContent = "脂質:" + fat_array_yd[0] + " g";
    document.getElementById('eat_c_1_yd').textContent = "炭水化物:" + ch_array_yd[0] + " g";
    document.getElementById('eat_cal_1_yd').textContent = cal_array_yd[0] + " kcal";
    document.getElementById('eat_menu_2_yd').textContent = key_b_yd;
    document.getElementById('eat_p_2_yd').textContent = "タンパク質:" + protein_array_yd[1] + " g";
    document.getElementById("eat_f_2_yd").textContent = "脂質:" + fat_array_yd[1] + " g";
    document.getElementById('eat_c_2_yd').textContent = "炭水化物:" + ch_array_yd[1] + " g";
    document.getElementById('eat_cal_2_yd').textContent = cal_array_yd[1] + " kcal";
    document.getElementById('eat_menu_3_yd').textContent = key_c_yd;
    document.getElementById('eat_p_3_yd').textContent = "タンパク質:" + protein_array_yd[2] + " g";
    document.getElementById("eat_f_3_yd").textContent = "脂質:" + fat_array_yd[2] + " g";
    document.getElementById('eat_c_3_yd').textContent = "炭水化物:" + ch_array_yd[2] + " g";
    document.getElementById('eat_cal_3_yd').textContent = cal_array_yd[2] + " kcal";
    document.getElementById('eat_score_yd').textContent = eat_sc_yd;

}

$(function () {
    let words = [
      "鶏肉",
      "卵",
      "納豆",
      "カレーライス",
      "ラーメン",
      "ハンバーガー",
      "刺身"
    ];

    const ids = [".keyword#key_a", ".keyword#key_b", ".keyword#key_c"]
    for(var i=0; i<=2; i++){
        $(ids[i]).autocomplete({
            source: words
        });
    }
  });



  function eat_calculate() {

    let words2 = [
        ["鶏肉", 30, 5, 50],
        ["卵", 10, 10, 20],
        ["納豆", 7, 5, 15],
        ["カレーライス", 20, 30, 150],
        ["ラーメン", 20, 100, 200],
        ["ハンバーガー", 30, 40, 100],
        ["刺身", 50, 40, 70]
      ];

    var key_a = document.getElementById('key_a').value;
    var key_b = document.getElementById('key_b').value;
    var key_c = document.getElementById('key_c').value;
    var protein_array = [0, 0, 0];
    var fat_array = [0, 0, 0];
    var ch_array = [0, 0, 0];
    var cal_array = [0, 0, 0];
    var gaincal_all = 0;

    for(let i=0; i<words2.length; i++){
        if(key_a === words2[i][0]){
            protein_array[0] = words2[i][1];
            fat_array[0] = words2[i][2];
            ch_array[0] = words2[i][3];
        }
        if(key_b === words2[i][0]){
            protein_array[1] = words2[i][1];
            fat_array[1] = words2[i][2];
            ch_array[1] = words2[i][3];
        }
        if(key_c === words2[i][0]){
            protein_array[2] = words2[i][1];
            fat_array[2] = words2[i][2];
            ch_array[2] = words2[i][3];
        }
    }

    for(let j=0; j<=2; j++){
        cal_array[j] = (4 * protein_array[j]) + (9 * fat_array[j]) + (4 * ch_array[j]);
        gaincal_all = gaincal_all + cal_array[j];
    }

    var eat_sc = eat_score(protein_array, fat_array, ch_array, gaincal_all);

    document.getElementById('gaincal_all').textContent = gaincal_all + " kcal";
    document.getElementById('eat_menu_1').textContent = key_a;
    document.getElementById('eat_p_1').textContent = "タンパク質:" + protein_array[0] + " g";
    document.getElementById("eat_f_1").textContent = "脂質:" + fat_array[0] + " g";
    document.getElementById('eat_c_1').textContent = "炭水化物:" + ch_array[0] + " g";
    document.getElementById('eat_cal_2').textContent = cal_array[0] + " kcal";
    document.getElementById('eat_menu_2').textContent = key_b;
    document.getElementById('eat_p_2').textContent = "タンパク質:" + protein_array[1] + " g";
    document.getElementById("eat_f_2").textContent = "脂質:" + fat_array[1] + " g";
    document.getElementById('eat_c_2').textContent = "炭水化物:" + ch_array[1] + " g";
    document.getElementById('eat_cal_2').textContent = cal_array[1] + " kcal";
    document.getElementById('eat_menu_3').textContent = key_c;
    document.getElementById('eat_p_3').textContent = "タンパク質:" + protein_array[2] + " g";
    document.getElementById("eat_f_3").textContent = "脂質:" + fat_array[2] + " g";
    document.getElementById('eat_c_3').textContent = "炭水化物:" + ch_array[2] + " g";
    document.getElementById('eat_cal_3').textContent = cal_array[2] + " kcal";
    document.getElementById('eat_score').textContent = eat_sc.toFixed(2);

};

/*今回は男女で分けず「その他」のステータスのみ*/
function eat_score(p_array, f_array, c_array, cal){
    
    var p = 0;
    var f = 0;
    var c = 0;
    var return_sc = 0;
    
    for(let i=0; i<=2; i++){
        p = p + p_array[i];
        f = f + f_array[i];
        c = c + c_array[i];
    }

    if(p <= 90){
        return_sc = return_sc + (10 - (50 * (1 - (p / 90))));
    }
    else{
        return_sc = return_sc + (10 - (50 * ((p / 90) - 1)));
    }

    if(f <= 75){
        return_sc = return_sc + (10 - (50 * (1 - (f / 75))));
    }
    else{
        return_sc = return_sc + (10 - (50 * ((f / 75) - 1)));
    }

    if(c <= 350){
        return_sc = return_sc + (10 - (50 * (1 - (c / 350))));
    }
    else{
        return_sc = return_sc + (10 - (50 * ((c / 350) - 1)));
    }

    if(cal <= 2300){
        return_sc = return_sc + (10 - (50 * (1 - (cal / 2300))));
    }
    else{
        return_sc = return_sc + (10 - (50 * ((cal / 2300) - 1)));
    }

    if(return_sc < 0){
        return_sc = 0;
    }

    return return_sc;

}