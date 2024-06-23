/********************トップ画面の関数(index.html)********************/
window.onload = function() {

    var eat_sc = 20;
    var sleep_sc = 22;
    var training_sc = 30;
    var total_sc = 72;

    document.getElementById('eat_score_top').textContent = eat_sc;
    document.getElementById('sleep_score_top').textContent = sleep_sc;
    document.getElementById('training_score_top').textContent = training_sc;
    document.getElementById('total_score').textContent = total_sc;

    var key_a = "鶏肉";
    var key_b = "卵";
    var key_c = "納豆";
    var protein_array = [30, 10, 7];
    var fat_array = [5, 10, 5];
    var ch_array = [50, 20, 15];
    var cal_array = [365, 210, 133];
    var gaincal_all = 708;
    //var eat_sc = 20;

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



    var al_array_h = "6";
    var al_array_m = "20";
    var s_array_h = "23";
    var s_array_m = "10";
    var e_array_h = "05";
    var e_array_m = "30";
    var ag_array_h = "0";
    var ag_array_m = "00";
    //var return_sc = "22";

    document.getElementById('sleep_all').textContent = al_array_h + "時間" + al_array_m + "分";
    document.getElementById('sleep_start').textContent = s_array_h + " : " + s_array_m;
    document.getElementById("sleep_end").textContent = e_array_h + " : " + e_array_m;
    document.getElementById("sleep_again").textContent = ag_array_h + "時間" + ag_array_m + "分";
    document.getElementById("sleep_score").textContent = sleep_sc;



    var burncal_all = "300";
    var key_a = "腕立て伏せ";
    var training_time_a = "20";
    var training_cal_1 = "60";
    var key_b = "ベンチプレス";
    var training_time_b = "30";
    var training_cal_2 = "90";
    var key_c = "デッドリフト";
    var training_time_c = "40";
    var training_cal_3 = "150";
    //var training_sc = "30";

    document.getElementById('burncal_all').textContent = burncal_all + " kcal";
    document.getElementById('training_menu_1').textContent = key_a;
    document.getElementById('training_time_1').textContent = training_time_a + " 分";
    document.getElementById("training_cal_1").textContent = training_cal_1 + " kcal";
    document.getElementById('training_menu_2').textContent = key_b;
    document.getElementById('training_time_2').textContent = training_time_b + " 分";
    document.getElementById("training_cal_2").textContent = training_cal_2 + " kcal";
    document.getElementById('training_menu_3').textContent = key_c;
    document.getElementById('training_time_3').textContent = training_time_c + " 分";
    document.getElementById("training_cal_3").textContent = training_cal_3 + " kcal";
    document.getElementById("training_score").textContent = training_sc;



    var maxHP_num = "2";
    var maxcure_num = "1";
    var maxjump_num = "4";
    var total_point = "3200";

    document.getElementById('maxHP_num').textContent = "所持数:" + maxHP_num;
    document.getElementById('maxcure_num').textContent = "所持数:"+ maxcure_num;
    document.getElementById("maxjump_num").textContent = "所持数:" + maxjump_num;
    document.getElementById("total_point").textContent = total_point;

  };