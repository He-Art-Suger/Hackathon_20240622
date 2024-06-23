/********************運動管理の関数(training.html)********************/
window.onload = function() {
    
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
    var training_sc = "30";

    var burncal_all_yd = "500";
    var key_a_yd = "スクワット";
    var training_time_a_yd = "40";
    var training_cal_1_yd = "160";
    var key_b_yd = "ランニング";
    var training_time_b_yd = "90";
    var training_cal_2_yd = "190";
    var key_c_yd = "デッドリフト";
    var training_time_c_yd = "40";
    var training_cal_3_yd = "150";
    var training_sc_yd = "30";

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

    document.getElementById('burncal_all_yd').textContent = burncal_all_yd + " kcal";
    document.getElementById('training_menu_1_yd').textContent = key_a_yd;
    document.getElementById('training_time_1_yd').textContent = training_time_a_yd + " 分";
    document.getElementById("training_cal_1_yd").textContent = training_cal_1_yd + " kcal";
    document.getElementById('training_menu_2_yd').textContent = key_b_yd;
    document.getElementById('training_time_2_yd').textContent = training_time_b_yd + " 分";
    document.getElementById("training_cal_2_yd").textContent = training_cal_2_yd + " kcal";
    document.getElementById('training_menu_3_yd').textContent = key_c_yd;
    document.getElementById('training_time_3_yd').textContent = training_time_c_yd + " 分";
    document.getElementById("training_cal_3_yd").textContent = training_cal_3_yd + " kcal";
    document.getElementById("training_score_yd").textContent = training_sc_yd;

}

$(function () {
    let words = [
      "腕立て伏せ",
      "スクワット",
      "背筋",
      "腹筋",
      "ウォーキング",
      "ランニング",
      "デッドリフト",
      "ベンチプレス",
      "ラットプルダウン",
      "レッグプレス",
      "サイドレイズ",
      "懸垂"
    ];

    let words2 = [
        ["腕立て伏せ", 1.2],
        ["スクワット", 2.0],
        ["背筋", 0.6],
        ["腹筋", 0.4],
        ["ウォーキング", 0.6],
        ["ランニング", 1.0],
        ["デッドリフト", 2.2],
        ["ベンチプレス", 1.7],
        ["ラットプルダウン", 1.3],
        ["レッグプレス", 1.9],
        ["サイドレイズ", 1.2],
        ["懸垂", 1.5]
      ];
    const ids = [".keyword#key_a", ".keyword#key_b", ".keyword#key_c"]
    for(var i=0; i<=2; i++){
        $(ids[i]).autocomplete({
            source: words
        });
    }
  });



  function training_calculate() {

    let words2 = [
        ["腕立て伏せ", 1.2],
        ["スクワット", 2.0],
        ["背筋", 0.6],
        ["腹筋", 0.4],
        ["ウォーキング", 0.6],
        ["ランニング", 1.0],
        ["デッドリフト", 2.2],
        ["ベンチプレス", 1.7],
        ["ラットプルダウン", 1.3],
        ["レッグプレス", 1.9],
        ["サイドレイズ", 1.2],
        ["懸垂", 1.5]
      ];

    var key_a = document.getElementById('key_a').value;
    var key_b = document.getElementById('key_b').value;
    var key_c = document.getElementById('key_c').value;
    var training_time_a = parseInt(document.getElementById('training_time_a').value);
    var training_time_b = parseInt(document.getElementById('training_time_b').value);
    var training_time_c = parseInt(document.getElementById('training_time_c').value);
    var mets_a = 0;
    var mets_b = 0;
    var mets_c = 0;

    for(let i=0; i<words2.length; i++){
        if(key_a === words2[i][0]){
            mets_a = words2[i][1];
        }
        if(key_b === words2[i][0]){
            mets_b = words2[i][1];
        }
        if(key_c === words2[i][0]){
            mets_c = words2[i][1];
        }
    }

    var training_cal_1 = mets_a * training_time_a;
    var training_cal_2 = mets_b * training_time_b;
    var training_cal_3 = mets_c * training_time_c;
    var burncal_all = training_cal_1 + training_cal_2 + training_cal_3;

    var training_sc = training_score(burncal_all);

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
};

function training_score(cal){
    var return_cal = 0;
    if(cal <= 300){
        return_cal = Math.floor(cal / 10);
    }
    else{
        return_cal = 30;
    }
    return return_cal;
};
