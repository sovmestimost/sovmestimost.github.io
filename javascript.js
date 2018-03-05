document.getElementById("mynum")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("check").click();
        }
    });
document.getElementById('check').onclick = function () {
    var usernum = document.getElementById('mynum').value;
    var usernum1 = document.getElementById('mynum1').value;
    var usernum2 = document.getElementById('mynum2').value;
    var usernum3 = document.getElementById('mynum3').value;
    var out = document.getElementById('out');
    if(
         usernum === "taron" && usernum1 ==="nersisyan" && usernum2 === "hasmik" && usernum3 === "grigoryan"

    ) {
        out.innerHTML = '<p class="name3">100%<p>';
        

    } else if (usernum === "Taron" && usernum1 === "Nersisyan" && usernum2 === "Hasmik" && usernum3 === "Grigoryan"){
        out.innerHTML = '<p class="name3">100%<p>';

    }else if (usernum2 === "taron" && usernum3 === "nersisyan" && usernum === "hasmik" && usernum1 === "grigoryan"){
        out.innerHTML = '<p class="name3">100%<p>';

    } else if (usernum2 === "Taron" && usernum3 === "Nersisyan" && usernum === "Hasmik" && usernum1 === "Grigoryan") {
        out.innerHTML = '<p class="name3">100%<p>';

    }else if (usernum === "taron" && usernum1 === "nersisyan" && usernum2 === "hasmik" && usernum3 === "shahbazyan"){
        out.innerHTML = '<i class="srtik1">♥</i>';

    } else if (usernum2 === "taron" && usernum3 === "nersisyan" && usernum === "hasmik" && usernum1 === "shahbazyan") {
        out.innerHTML = '<i class="srtik1">♥</i>';

    } else    {
        
        var random = Math.floor(Math.random() * 98) + 1
        out.innerHTML = [random] + '%';

    } 

};