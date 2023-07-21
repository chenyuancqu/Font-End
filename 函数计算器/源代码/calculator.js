//用来保存输入的数字与符号
let results = "";
//计算结果
let calresult = "";
// 用来判断开头是否结尾是＊／符号的正则表达式
let r1 = /^[\*|\/].+/;
let r2 = /.+[\*|\/]$/;

//这个函数用来在第一行显示输入的数字与符号
function getElement() {
    //获取单元格的内容
    let element = event.srcElement.innerText;
    //如果点击了＝号，那么就不在第一栏显示
    if (element == "=") {
        return;
    }
    //如果点击AC键，则将results置为空
    if (element == "AC") {
        results = "";
        document.getElementById("top").innerHTML = "0";
        return;
    }

    // ％用来将结果除以100
    if (element == "%" && results != "") {
        results = calresult / 100;
        document.getElementById("result").innerHTML = results;
        return;
    }

    // 对结果取负
    if (element == "+/-" && results != "") {
        //先给结果加个括号，然后再对它取负
        results = `-(${results})`
        document.getElementById("result").innerHTML = results;
        return;
    }
    else {
        //如果＋＝改为＝，那么top框只会显示一次的输入结果 ＋＝实现累加输入
        results += event.srcElement.innerText;
        //输入的内容在top中显示
        document.getElementById("top").innerHTML = results;
    }
}

document.addEventListener('keydown', (event) => {
    console.log("keydown", event)
    let keyCode = event.keyCode;
    let key = event.key;
    if(event.metaKey){
        return
    }
    if(key === "=" || keyCode === 13){
        //点击了=或者回车
        calResult()
    }else if(keyCode >= 48 && keyCode <= 57) {
        //数字
        results += event.key
        //输入的内容在top中显示
        document.getElementById("top").innerHTML = results;
    }else if(key === "+" || key === "-" || key === "*" || key === "/"){
        results += event.key
        document.getElementById("top").innerHTML = results;
    }else if(keyCode === 8) {
        //后退按钮
        results = results.slice(0, results.length - 1)
        document.getElementById("top").innerHTML = results;
    }
    else{
        return;
    }
})

function calResult() {
    //如果开头或结果输入了乘号和除号，那么结果栏里显示ERROR
    if (results.match(r1) || results.match(r2)) {
        document.getElementById("result").innerHTML = "ERROR";
        results = "";
        return;
    }
    calresult = eval(results);
    // 如果啥都没按，那么结果栏里显示0
    if (results == "") {
        calresult = "0";
    }
    document.getElementById("result").innerHTML = calresult;
}