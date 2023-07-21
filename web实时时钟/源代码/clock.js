var hr = document.querySelector(".hr");
var mn = document.querySelector(".mn");
var sc = document.querySelector(".sc");

function mytime() {
    var date = new Date();
    //360 12小时
    var hh = date.getHours() * 30;
    // 0-59
    var mm = date.getMinutes() * 6;
    // 0-59
    var ss = date.getSeconds() * 6;
    hr.style.transform = 'rotate(' + (hh + mm / 12) + 'deg)';
    mn.style.transform = 'rotate(' + mm + 'deg)';
    sc.style.transform = 'rotate(' + ss + 'deg)';

}
setInterval('mytime()');