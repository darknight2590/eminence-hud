$(document).on('keydown', function() {
    switch(event.keyCode) {
        case 27: 
            break;
    }
});
var moneyTimeout = null;
var CurrentProx = 0;
(() => {
    QBHud = {};
    QBHud.Open = function(data) {
        $(".money-cash").css("display", "block");
        $("#cash").html(data.cash);
    };
    QBHud.Close = function() {
    };
    QBHud.Show = function(data) {
        if(data.type == "cash") {
            $(".money-cash").fadeIn(150);
            $("#cash").html(data.cash);
            setTimeout(function() {
                $(".money-cash").fadeOut(750);
            }, 3500)
        } 
    };
    QBHud.CarHud = function(data) {
        if (data.show) {
            $(".ui-car-container").fadeIn();
            $(".hnitrous").fadeIn(3000);
            $(".circle-engine").fadeIn(3000);
        } else {
            $(".ui-car-container").fadeOut();
            $('.hnitrous').fadeOut(3000);
            $(".circle-engine").fadeOut(3000);
        }
    };
    QBHud.UpdateHud = function(data) {
        var Show = "block";
        if (data.show) {
            Show = "none";
            $(".ui-container").css("display", Show);
            return;
        }
        $(".ui-container").css("display", Show);
        Progress(data.talking, ".mic");
            if (data.speaking == 1) {
            $(".mic").css({"stroke":"yellow"}); 
            } else {
            $('.mic').css({"stroke":"#fff"});
            }
        Progress(data.health - 100, ".hp");
        if (data.health <= 195) {
            $('.hvida').fadeIn(3000);
        }
        if (data.health >= 196) {
            $('.hvida').fadeOut(3000);
        }
        if (data.health <= 145) {
            $('.vida').css("stroke", "red");
        } else {
            $('.vida').css("stroke", "#4CAF50");
        }
        Progress(data.armor, ".armor");
        if (data.armor <= 95) {
            $('.harmor').fadeIn(3000);
        }
        if (data.armor >= 96) {
            $('.harmor').fadeOut(3000);
        }
        if (data.armor <= 45) {
            $('.amr').css("stroke", "red");
        } else {
            $('.amr').css("stroke", "#248bbe");
        }
        Progress(data.hunger, ".hunger");
        if (data.hunger <= 95) {
            $('.hhunger').fadeIn(3000);
        }
        if (data.hunger >= 96) {
            $('.hhunger').fadeOut(3000);
        }
        if (data.hunger <= 45) {
            $('.fome').css("stroke", "red");
        } else {
            $('.fome').css("stroke", "#f0932b");
        }
        Progress(data.thirst, ".thirst");
        if (data.thirst <= 95) {
            $('.hthirst').fadeIn(3000);
        }
        if (data.thirst >= 96) {
            $('.hthirst').fadeOut(3000);
        }
        if (data.thirst <= 45) {
            $('.cede').css("stroke", "red");
        } else {
            $('.cede').css("stroke", "#3467d4");
        }
        Progress(data.nivel, ".nitrous");
        if (data.activo) {
        $(".nitrous").css({"stroke":"#fcb80a"});
        } else {
        $(".nitrous").css({"stroke":"rgb(241, 71, 185)"});
        }  
        setProgressSpeed(data.speed, ".progress-speed");
        setProgressFuel(data.fuel, ".progress-fuel");
        if (data.seatbelt) {
            $(".circle-seat").fadeIn(750);
        } else {
            $(".circle-seat").fadeOut(750);
        }
        Progress(data.prox, ".stress");
        if (data.whisper) {
            $(".circle-seat").fadeIn(750);
        } if (data.normal) {
            $(".circle-seat").fadeOut(750);
        } if (data.shouting) {
        }
        if (data.talking && data.radio) {
            $(".mic").css({"background-color": "red"}); 
        } else if (data.talking) {
            $(".mic").css({"background-color": "white"}); 
        } else {
            $(".mic").css({"background-color": "rgb(85, 85, 85)"}); 
        }
        Progress(data.stress, ".stress");
        if (data.stress >= 3) {
            $('.hstress').fadeIn(3000);
        }
        if (data.stress <= 2) {
            $('.hstress').fadeOut(3000);
        }
        Progress((data.engine), ".engine");
        if (data.engine <= 45){
            $('.engine').css("stroke", "#B71C1C");
            $('.hengine').css("stroke", "#B71C1C"); 
        }
        else if (data.engine <= 75 && data.engine >= 46 ) {
            $('.engine').css("stroke", "#FFD600");
            $('.hengine').css("stroke", "#FFD600");
        } else {
            $('.engine').css("stroke", "#4CAF50");
            $('.hengine').css("stroke", "#4CAF50");
        }
    };
    QBHud.UpdateProximity = function(data) {
        if (data.prox == 1) {
            $("[data-voicetype='1']").fadeIn(150);
            $("[data-voicetype='2']").fadeOut(150);
            $("[data-voicetype='3']").fadeOut(150);
        } else if (data.prox == 2) {
            $("[data-voicetype='1']").fadeIn(150);
            $("[data-voicetype='2']").fadeIn(150);
            $("[data-voicetype='3']").fadeOut(150);
        } else if (data.prox == 3) {
            $("[data-voicetype='1']").fadeIn(150);
            $("[data-voicetype='2']").fadeIn(150);
            $("[data-voicetype='3']").fadeIn(150);
        }
        CurrentProx = data.prox;
    }
    QBHud.SetTalkingState = function(data) {
        if (!data.IsTalking) {
            $(".voice-block").animate({"background-color": "rgb(255, 255, 255)"}, 150);
        } else {
            $(".voice-block").animate({"background-color": "#fc4e03"}, 150);
        }
    }
    QBHud.Update = function(data) {
        if(data.type == "cash") {
            $(".money-cash").css("display", "block");
            $("#cash").html(data.cash);
            if (data.minus) {
                $(".money-cash").append('<p class="moneyupdate minus">-<span id="cash-symbol">&dollar;&nbsp;</span><span><span id="minus-changeamount">' + data.amount + '</span></span></p>')
                $(".minus").css("display", "block");
                setTimeout(function() {
                    $(".minus").fadeOut(750, function() {
                        $(".minus").remove();
                        $(".money-cash").fadeOut(750);
                    });
                }, 3500)
            } else {
                $(".money-cash").append('<p class="moneyupdate plus">+<span id="cash-symbol">&dollar;&nbsp;</span><span><span id="plus-changeamount">' + data.amount + '</span></span></p>')
                $(".plus").css("display", "block");
                setTimeout(function() {
                    $(".plus").fadeOut(750, function() {
                        $(".plus").remove();
                        $(".money-cash").fadeOut(750);
                    });
                }, 3500)
            }
        }
    };
    function ProgressVoip(percent, element) {
        var circle = document.querySelector(element);
        var radius = circle.r.baseVal.value;
        var circumference = radius * 200 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - ((-percent * 100) / 100 / 100) * circumference;
        circle.style.strokeDashoffset = -offset;
    }
    function Progress(percent, element) {
        var circle = document.querySelector(element);
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - ((-percent * 100) / 100 / 100) * circumference;
        circle.style.strokeDashoffset = -offset;
    }
    function setProgressSpeed(value, element){
        var circle = document.querySelector(element);
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        var html = $(element).parent().parent().find('span');
        var percent = value*100/450;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - ((-percent*73)/100) / 100 * circumference;
        circle.style.strokeDashoffset = -offset;
        html.text(value);
      }
      function setProgressFuel(percent, element) {
        var circle = document.querySelector(element);
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        var html = $(element).parent().parent().find("span");
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - ((-percent * 73) / 100 / 100) * circumference;
        circle.style.strokeDashoffset = -offset;
        html.text(Math.round(percent));
      }
    window.onload = function(e) {
        window.addEventListener('message', function(event) {
            switch(event.data.action) {
                case "open":
                    QBHud.Open(event.data);
                    break;
                case "close":
                    QBHud.Close();
                    break;
                case "update":
                    QBHud.Update(event.data);
                    break;
                case "show":
                    QBHud.Show(event.data);
                    break;
                case "hudtick":
                    QBHud.UpdateHud(event.data);
                    break;
                case "car":
                    QBHud.CarHud(event.data);
                    break;
                case "engine":
                    QBHud.EngineHealth(event.data);
                    break;
                case "nitrous":
                    QBHud.UpdateNitrous(event.data);
                    break;
                case "UpdateProximity":
                    QBHud.UpdateProximity(event.data);
                    break;
                case "talking":
                    QBHud.SetTalkingState(event.data);
                    break;
            }
        })
    }
})();
