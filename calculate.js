function sleep_calculate() {

    var sleep_start_h = parseInt(document.getElementById('sleep_start_h').value);
    var sleep_start_m = parseInt(document.getElementById('sleep_start_m').value);
    var sleep_end_h = parseInt(document.getElementById('sleep_end_h').value);
    var sleep_end_m = parseInt(document.getElementById('sleep_end_m').value);
    var sleep_again_h = parseInt(document.getElementById('sleep_again_h').value);
    var sleep_again_m = parseInt(document.getElementById('sleep_again_m').value);

    var start_array = [sleep_start_h, sleep_start_m];
    var end_array = [sleep_end_h, sleep_end_m];
    var again_array = [sleep_again_h, sleep_again_m];
    var all_array = [0, 0]

    time_calculate(start_array);
    time_calculate(end_array);

    all_array = all_calculate(all_array, start_array, end_array, again_array);

    const return_start_h = hour_addzero(start_array[0]);
    const return_start_m = minute_addzero(start_array[1]);
    const return_end_h = hour_addzero(end_array[0]);
    const return_end_m = minute_addzero(end_array[1]);

    document.getElementById('sleep_all').textContent = all_array[0] + "時間" + all_array[1] + "分";
    document.getElementById('sleep_start').textContent = return_start_h + " : " + return_start_m;
    document.getElementById("sleep_end").textContent = return_end_h + " : " + return_end_m;
    document.getElementById("sleep_again").textContent = again_array[0] + "時間" + again_array[1] + "分";
};

function time_calculate(array) {
    if(array[1] >= 60){
        array[0] = array[0] + Math.floor(array[1] / 60);
        array[1] = array[1] % 60;
    }
    if(array[0] >= 24){
        array[0] = array[0] % 24;
    }
    return array;
};

function all_calculate(al_array, s_array, e_array, ag_array) {

    if(s_array[0] <= e_array[0]){
        al_array[0] = e_array[0] - s_array[0];
        if(s_array[1] <= e_array[1]){
            al_array[1] = e_array[1] - s_array[1];
        }
        else{
            al_array[1] = e_array[1] + 60 - s_array[1];
            al_array[0] = al_array[0] - 1;
        }
    }
    else{
        al_array[0] = e_array[0] + 24 - s_array[0];
        if(s_array[1] <= e_array[1]){
            al_array[1] = e_array[1] - s_array[1];
        }
        else{
            al_array[1] = e_array[1] + 60 - s_array[1];
            al_array[0] = al_array[0] - 1;
        }
    }

    al_array[0] = al_array[0] + ag_array[0];
    al_array[1] = al_array[1] + ag_array[1];

    return al_array;

};

function minute_addzero(minute) {
    if(minute < 10){
        var min_addzero = "0" + minute;
    }
    else{
        var min_addzero = minute;
    }
    return min_addzero;
};

function hour_addzero(hour) {
    if(hour < 10){
        var hour_addzero = "0" + hour;
    }
    else{
        var hour_addzero = hour;
    }
    return hour_addzero;
};