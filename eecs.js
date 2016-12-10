var introAudio = new Audio('intro.mp3');
var loopAudio = new Audio('loop.mp3');
var eecsShit = [
    ["./bonus_clips/EECSforLifeYo.mp3", function () {
        $(".bonus-image").attr("src", "./bonus_imgs/eecs4lyfe.jpg");
    }],
    ["./bonus_clips/ImBetterThanYou.mp3", function () {
        $(".bonus-image").attr("src", "./bonus_imgs/betterthanyou.jpg");
    }],
    ["./bonus_clips/SixFigsRespeck.mp3", function () {
        $(".bonus-image").attr("src", "./bonus_imgs/sixfigsrespek.jpg");
    }]
];

var BEAT_TIME = (60 / 143.1) * 1000;
// used to be 143 bpm
var fonts = [
    "Georgia, serif",
    "Palatino Linotype",
    "Times New Roman",
    "Impact, Charcoal, sans-serif",
    "Century Gothic, sans-serif",
    "Arial Black, Gadget, sans-serif",
    "Copperplate / Copperplate Gothic Light, sans-serif",
    "Lucida Console, Monaco, monospace",
    "Courier New, Courier, monospace",
    "Comic Sans MS"
];

var titles = [
    "__*EECS*__",
    "__/__EECS__\\__",
    "_*EECS*_",
    "*_EECS_*",
    "_xX_EECS_Xx_"
];

function getRandomColor() {
    hue = Math.floor(Math.random() * 360);
    return "hsl(" + hue + ", 100%, 50%)";
}

function getRandomColorDark() {
    hue = Math.floor(Math.random() * 360);
    return "hsl(" + hue + ", 100%, 25%)";
}

function loop() {
    $(".bg").css("background-color", getRandomColor());
    $(".eecs-text").css("color", getRandomColor());
    $(".dark").css("color", getRandomColorDark());

    var WIGGLE =  window.screen.availHeight * window.screen.availWidth / 100000; // approximately 20 for full-screen
    var w = $(".bg").width();
    var h = $(".bg").height();
    $(".dark").css("left", w / 2 + Math.random() * WIGGLE - WIGGLE / 2);
    $(".dark").css("top", h / 2 + Math.random() * WIGGLE - WIGGLE / 2);

    window.setTimeout(loop,1000);
}

function fontChange() {
    var font = fonts[Math.floor(Math.random() * fonts.length)];
    $(".eecs-text").css("font-family", font);
}

function pulse() {
    $(".eecs-text").css("font-size", "40vh");
    $(".eecs-text").animate({"font-size": "20vh"}, 60);
}

function iam() {
    $(".iam-text").text("I'm an");
    setTimeout(function() {
        $(".iam-text").text("");
    }, BEAT_TIME);
}

function masterace() {
    $(".masterace-text").text("Master-Ace");
    setTimeout(function() {
        $(".masterace-text").text("");
    }, BEAT_TIME);
}

function fourpointoh() {
    $(".fourpointoh-text").css("left", "450%");
    $(".fourpointoh-text").animate({"left": "-200%"}, 4000, "linear");
}

function title() {
    document.title = titles[Math.floor(Math.random() * titles.length)];
}

function start1() {
    loopAudio.volume = 0;
    loopAudio.play();
    loopAudio.pause();
    loopAudio.volume = 1;
    $(".warning").css("font-size", "0.00002vw");
    $(".disclaimer").css("font-size", "0.00002vw");
    $(".startbutton").css("top", "-100%");
    pulse();
    introAudio.play();
    setTimeout(start2, BEAT_TIME * 2);
}


function start2() {
    pulse();
    setTimeout(start3, BEAT_TIME * 2);
}

function start3() {
    pulse();
    setTimeout(pulse, BEAT_TIME);
    setTimeout(pulse, BEAT_TIME * 2);
    setTimeout(pulse, BEAT_TIME * 3);
    setTimeout(body, BEAT_TIME * 4);
    $(".meecs").css("font-size", "2vw");
}

function loopMusic() {
    loopAudio.pause();
    loopAudio.currentTime = 0;
    loopAudio.play();
}

function body() {
    setInterval(loop, 100);
    setTimeout(function () {
        iam();
        setTimeout(function () {
            iam();
            setTimeout(function () {
                iam();
                setInterval(iam, BEAT_TIME * 4);
            }, BEAT_TIME * 8);
        }, BEAT_TIME * 8);
    }, BEAT_TIME * 15);
    setTimeout(function () {
        setInterval(masterace, BEAT_TIME * 4);
    }, BEAT_TIME * 45);
    setInterval(fontChange, 100);
    setInterval(title, 1000);
    setInterval(pulse, BEAT_TIME);
    setTimeout(function () {
        setInterval(fourpointoh, BEAT_TIME * 32);
        setInterval(loopMusic, BEAT_TIME * 32);
    }, BEAT_TIME * 48);
}


introAudio.load();
loopAudio.load();
loopAudio.loop = true;


function memo() {
  window.open("index.html");
}

function moreeecs() {
    var shitArray = eecsShit[Math.floor(Math.random() * eecsShit.length)];
    var sound = new Audio(shitArray[0]);
    var f = shitArray[1];
    sound.play();
    f();
}
