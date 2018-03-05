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
         usernum === "taron" && usernum1 === "nersisyan" && usernum2 === "hasmik" && usernum3 === "grigoryan" ||
         usernum === "Taron" && usernum1 === "Nersisyan" && usernum2 === "Hasmik" && usernum3 === "Grigoryan" ||
         usernum === "hasmik" && usernum1 === "grigoryan" && usernum2 === "taron" && usernum3 === "nersisyan" ||
         usernum === "Hasmik" && usernum1 === "Grigoryan" && usernum2 === "Taron" && usernum3 === "Nersisyan" ||
         usernum === "тарон" && usernum1 === "нерсисян" && usernum2 === "асмик" && usernum3 === "григорян" ||
         usernum === "Тарон" && usernum1 === "Нерсисян" && usernum2 === "Асмик" && usernum3 === "Григорян" ||
         usernum === "асмик" && usernum1 === "григорян" && usernum2 === "тарон" && usernum3 === "нерсисян" ||
         usernum === "Асмик" && usernum1 === "Григорян" && usernum2 === "Тарон" && usernum3 === "Нерсисян" ||
        usernum === "տարոն" && usernum1 === "ներսիսյան" && usernum2 === "հասմիկ" && usernum3 === "գրիգորյան" ||
        usernum === "Տարոն" && usernum1 === "ներսիսյան" && usernum2 === "Հասմիկ" && usernum3 === "Գրիգորյան" ||
        usernum === "հասմիկ" && usernum1 === "գրիգորյան" && usernum2 === "taron" && usernum3 === "ներսիսյան" ||
        usernum === "Հասմիկ" && usernum1 === "Գրիգորյան" && usernum2 === "Taron" && usernum3 === "Ներսիսյան" 



    ) {
        out.innerHTML = '<p class="name3">100%<p>';
        

    }
    else if (usernum === "taron" && usernum1 === "nersisyan" && usernum2 === "hasmik" && usernum3 === "shahbazyan"){
        out.innerHTML = '<i class="srtik1">♥</i>';

    } else if (usernum2 === "taron" && usernum3 === "nersisyan" && usernum === "hasmik" && usernum1 === "shahbazyan") {
        out.innerHTML = '<i class="srtik1">♥</i>';

    } else    {
        
        var random = Math.floor(Math.random() * 98) + 1
        out.innerHTML = [random] + '%';

    } 

};