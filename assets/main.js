function options(source) {
    source.style.display = 'block';
}

function show(s, t) {

    // if (window.innerWidth <= 1100) {
    // function hideAll();
    // };
    // else {
    s.style.display = 'block';
    // }
    t.style.backgroundColor = "rgba(44, 76, 99, 1)";
}

function hide(s, t) {
    // if (window.innerWidth >= 1100){
    s.style.display = 'none';
    // }  
    t.style.backgroundColor = "rgba(44, 76, 81, 0)";
}

function hideAll() {
    hide("keysButton");
}

var isMute = 0;
function muteSwitch() {
    var mute = document.getElementById('mute');
    if (mute.src.match("mute.png")) {
        mute.src = "./assets/unmuted.png";
        isMute = 1;
    }
    else {
        mute.src = "./assets/mute.png";
        isMute = 0;
    }
}

var isBarOrSec = 0;

function barFunc() {
    var bars = document.getElementById('barId');
    var seconds = document.getElementById('secondId');
    bars.style.opacity = "1";
    seconds.style.opacity = "0.3";
    isBarOrSec = 0;
}

function secondFunc() {
    var bars = document.getElementById('barId');
    var seconds = document.getElementById('secondId');
    bars.style.opacity = "0.3";
    seconds.style.opacity = "1";
    isBarOrSec = 1;
}

function squares(source) {
    console.log(source);
    if (source.style.backgroundColor == "black") {
        source.style.backgroundColor = "rgb(149, 165, 166)";
    } else {
        source.style.backgroundColor = "black";
    }
    // }else if (source.style.backgroundColor == "white"){
    //   source.style.backgroundColor="black";
    // }
}

// turn multi checkboxes on/off

// var Cb = document.getElementById("Cb");
// var C = document.getElementById("C");
// var Cs = document.getElementById("Cs");
// var Db = document.getElementById("Db");
// var D = document.getElementById("D");
// var Eb = document.getElementById("Eb");
// var E = document.getElementById("E");
// var F = document.getElementById("F");
// var Fs = document.getElementById("Fs");
// var Gb = document.getElementById("Gb");
// var G = document.getElementById("G");
// var Ab = document.getElementById("Ab");
// var A = document.getElementById("A");
// var Bb = document.getElementById("Bb");
// var B = document.getElementById("B");

// var maj = document.getElementById("maj");
// var min = document.getElementById("min");
// var dim = document.getElementById("dim");
// var sus4 = document.getElementById("sus4");
// var sus2 = document.getElementById("sus2");
// var aug = document.getElementById("aug");

// var maj6 = document.getElementById("maj6");
// var min6 = document.getElementById("min6");

// var maj7 = document.getElementById("maj7");
// var min7 = document.getElementById("min7");
// var mMaj7 = document.getElementById("mMaj7");
// var dom7 = document.getElementById("dom7");
// var dom7b9 = document.getElementById("dom7b9");
// var dom7s9 = document.getElementById("dom7s9");
// var alt7 = document.getElementById("alt7");
// var dim7 = document.getElementById("dim7");
// var m7b5 = document.getElementById("m7b5");
// var dom7sus4 = document.getElementById("dom7sus4");
// var dom7s5 = document.getElementById("dom7s5");

// var maj9 = document.getElementById("maj9");
// var maj69 = document.getElementById("maj69");
// var min9 = document.getElementById("min9");
// var dom9 = document.getElementById("dom9");

// var majs11 = document.getElementById("majs11");
// var m11 = document.getElementById("maj11");
// var s11 = document.getElementById("s11");

// var maj13 = document.getElementById("maj13");
// var majb13 = document.getElementById("majb13");
// var m13 = document.getElementById("m13");
// var dom13 = document.getElementById("dom13");

function optSwitch(checkboxes, source) {
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

function allSwitch(source) {
    majSwitch(source);
    minSwitch(source);
    domSwitch(source);
    dimSwitch(source);
    susSwitch(source);
    augSwitch(source);
    var checkboxes = document.getElementsByName("all");
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

function majSwitch(source) {
    var checkboxes = document.getElementsByName("maj");
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

function minSwitch(source) {
    var checkboxes = document.getElementsByName("min");
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

function domSwitch(source) {
    var checkboxes = document.getElementsByName("dom");
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

function dimSwitch(source) {
    var checkboxes = document.getElementsByName("dim");
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

function susSwitch(source) {
    var checkboxes = document.getElementsByName("sus");
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

function augSwitch(source) {
    var checkboxes = document.getElementsByName("aug");
    if (source.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}

var time = 1000;
var stop = 0;
var work = work;
var interval = interval;
var toggle = 1;

function startFinish() {
    var noteHelp = document.getElementById("noteHelp");
    var pause = document.getElementById("pause")
    if (toggle == 1) {
        finish();
        toggle = 0;
        pause.src = "./assets/play.png";
        noteHelp.style.display = 'none';
        return;
    } if (toggle == 0) {
        start();
        toggle = 1;
        pause.src = "./assets/pause.png";
    }
}

function finish() {
    stop = 1;
    document.getElementById("demo").innerHTML = "paused";
    // document.getElementById("noteHelp").style.display = 'none';
    clearInterval(interval);
}

function clearInt() {
    clearInterval(interval);
    start()
}

function arrayBuild(checkboxArray, array) {
    for (var i = 0, max = checkboxArray.length; i < max; i += 1) {
        if (checkboxArray[i].type === "checkbox" && checkboxArray[i].checked) {
            array.push(checkboxArray[i].value);
        }
    }
    return array;
}

function noteHelp(chord) {
    var degrees;
    // var chord = "maj";

    switch (chord) {
        case "maj":
            degrees = "1--3--5";
            break;
        case "maj6":
            degrees = "1--3--5--6";
            break;
        case "maj7":
            degrees = "1--3--5--7";
            break;
        case "maj9":
            degrees = "1--3--5--7--9";
            break;
        case "maj69":
            degrees = "1--3--5--6--9";
            break;
        case "maj\u266F11":
            degrees = "1--3--5--7--9--&#9839;11";
            break;
        case "maj13":
            degrees = "1--3--5--7--9--11--13";
            break;
        case "maj\u266d13":
            degrees = "1--3--5--7--9--11--&#9837;13";
            break;
        case "min":
            degrees = "1--&#9837;3--5";
            break;
        case "min6":
            degrees = "1--&#9837;3--5--6";
            break;
        case "min7":
            degrees = "1--&#9837;3--5--&#9837;7";
            break;
        case "mMaj7":
            degrees = "1--&#9837;3--5--7";
            break;
        case "min9":
            degrees = "1--&#9837;3--5--&#9837;7--9";
            break;
        case "min11":
            degrees = "1--&#9837;3--5--&#9837;7--9--11";
            break;
        case "min13":
            degrees = "1--&#9837;3--5--&#9837;7--9--11--13";
            break;
        case "7":
            degrees = "1--3--5--&#9837;7";
            break;
        case "7\u266D9":
            degrees = "1--3--5--&#9837;7--&#9837;9";
            break;
        case "7\u266F9":
            degrees = "1--3--5--&#9837;7--&#9839;9";
            break;
        case "alt7":
            degrees = "1--3--&#9837;5--&#9839;5--&#9837;7--&#9837;9--&#9839;9";
            break;
        case "9":
            degrees = "1--3--5--&#9837;7--9";
            break;
        case " \u266F11":
            degrees = "1--3--5--&#9837;7--9--&#9839;11";
            break;
        case "13":
            degrees = "1--3--5--&#9837;7--9--11--13";
            break;
        case "dim":
            degrees = "1--&#9837;3--&#9837;5";
            break;
        case "dim7":
            degrees = "1--&#9837;3--&#9837;5--&#9837;&#9837;7";
            break;
        case "m7\u266D5":
            degrees = "1--&#9837;3--&#9837;5--&#9837;7";
            break;
        case "sus4":
            degrees = "1--4--5";
            break;
        case "7sus4":
            degrees = "1--4--5--&#9837;7";
            break;
        case " \u266D9sus":
            degrees = "1--4--5--&#9837;7--&#9837;9";
            break;
        case "sus2":
            degrees = "1--2--5";
            break;
        case "aug":
            degrees = "1--3--&#9839;5";
            break;
        case "7\u266F5":
            degrees = "1--3--&#9839;5--7";
            break;
        case " Ionian":
            degrees = "1--2--3--4--5--6--7";
            break;
        case " Dorian":
            degrees = "1--2--&#9837;3--4--5--6--&#9837;7";
            break;
        case " Phyrgian":
            degrees = "1--&#9837;2--&#9837;3--4--5--&#9837;6--&#9837;7";
            break;
        case " Lydian":
            degrees = "1--2--3--&#9839;4--5--6--7";
            break;
        case " Mixolydian":
            degrees = "1--2--3--4--5--6--&#9837;7";
            break;
        case " Aeolian":
            degrees = "1--2--&#9837;3--4--5--&#9837;6--&#9837;7";
            break;
        case " Locrian":
            degrees = "1--&#9837;2--&#9837;3--4--&#9837;5--&#9837;6--&#9837;7";
            break;
        case " Melodic Minor":
            degrees = "1--2--3--4--5--6--7";
            break;
        case " Dorian \u266D9":
            degrees = "1--&#9837;2--&#9837;3--4--5--6--&#9837;7";
            break;
        case " Lydian Augmented":
            degrees = "1-2-3-4&#9839;-5&#9839;-6-7";
            break;
        case " Lydian Dominant":
            degrees = "1--2--3--&#9839;4--5--6--&#9837;7";
            break;
        case " Mixolydian \u266D6":
            degrees = "1--2--3--4--5--&#9837;6--&#9837;7";
            break;
        case " Locrian \u266E2":
            degrees = "1--2--&#9837;3--4--&#9837;5--&#9837;6--&#9837;7";
            break;
        case " Super Locrian":
            degrees = "1--&#9837;2--&#9837;3--&#9837;4--&#9837;5--&#9837;6--&#9837;7";
            break;
        case " Chromatic":
            degrees = "All the notes!";
            break;
        case " Whole Tone":
            degrees = "1--2--3--&#9837;4--&#9837;5--&#9837;6";
            break;
        case " Major Pentatonic":
            degrees = "1--2--3--5--6";
            break;
        case " Minor Pentatonic":
            degrees = "1--&#9837;3--4--5--&#9837;7";
            break;
        case " Blues":
            degrees = "1--&#9837;3--4--&#9837;5--5--&#9837;7";
            break;
        case " Spanish Gypsy":
            degrees = "1--&#9837;2--3--4--5--&#9837;6--&#9837;7";
            break;
        case " Whole Half":
            degrees = "1--2--&#9837;3--4--&#9837;5--&#9837;6--6--7";
            break;
        case " Half Whole":
            degrees = "1--&#9837;2--&#9837;3--3--&#9837;5--5--6--&#9837;7";
            break;
        case " Major Bebop":
            degrees = "1--2--3--4--5--6--&#9837;7--7";
            break;
        case " Minor Bebop":
            degrees = "1--2--&#9837;3--4--5--6--&#9837;7--7";
            break;

        default:
            degrees = chord;
    }
    var noteHelp = document.getElementById("noteHelp");
    noteHelp.innerHTML = degrees;
    noteHelp.style.display = 'block';
};


start = function start() {
    if (stop == 1) {
        time = 0;
    }
    stop = 0;
    work = setTimeout(function randWord() {
        if (stop == 0) {

            var keys = [];
            var formNaturals = document.getElementById("formNaturals");
            var inputsNaturals = formNaturals.getElementsByTagName("input");
            arrayBuild(inputsNaturals, keys);

            var formSharps = document.getElementById("formSharps");
            var inputsSharps = formSharps.getElementsByTagName("input");
            arrayBuild(inputsSharps, keys);

            var formFlats = document.getElementById("formFlats");
            var inputsFlats = formFlats.getElementsByTagName("input");
            arrayBuild(inputsFlats, keys);

            var key = keys[Math.floor(Math.random() * keys.length)];

            var chords = [];

            var ch5 = document.getElementById("form5");
            var inputs5 = ch5.getElementsByTagName("input");
            arrayBuild(inputs5, chords);

            var ch6 = document.getElementById("form6");
            var inputs6 = ch6.getElementsByTagName("input");
            arrayBuild(inputs6, chords);

            var ch7 = document.getElementById("form7");
            var inputs7 = ch7.getElementsByTagName("input");
            arrayBuild(inputs7, chords);

            var ch9 = document.getElementById("form9");
            var inputs9 = ch9.getElementsByTagName("input");
            arrayBuild(inputs9, chords);

            var ch11 = document.getElementById("form11");
            var inputs11 = ch11.getElementsByTagName("input");
            arrayBuild(inputs11, chords);

            var ch13 = document.getElementById("form13");
            var inputs13 = ch13.getElementsByTagName("input");
            arrayBuild(inputs13, chords);

            var formMajor = document.getElementById("formMajor");
            var inputsMajor = formMajor.getElementsByTagName("input");
            arrayBuild(inputsMajor, chords);

            var formMinor = document.getElementById("formMinor");
            var inputsMinor = formMinor.getElementsByTagName("input");
            arrayBuild(inputsMinor, chords);

            var formMisc = document.getElementById("formMisc");
            var inputsMisc = formMisc.getElementsByTagName("input");
            arrayBuild(inputsMisc, chords);

            var chord = chords[Math.floor(Math.random() * chords.length)];

            if (isBarOrSec == 0) {
                var BPM = document.getElementById("BPM").value;
                BPS = 1000 / parseFloat(BPM / 60);

                var barMin = document.getElementById("barMin").value;
                var barMax = document.getElementById("barMax").value;
                barMin = parseInt(barMin);
                barMax = parseInt(barMax);
                var barTime = Math.floor(Math.random() * (barMax - barMin + 1)) + barMin;
                var BPB = 1;

                interval = setInterval(function interval() {
                    var strong = document.getElementById('strong');
                    var weak = document.getElementById('weak');
                    
                    document.getElementById("demo").innerHTML = key + chord + " for  " + barTime + " bars.";
                    noteHelp(chord);

                    sq1 = document.getElementById("square1");
                    sq2 = document.getElementById("square2");
                    sq3 = document.getElementById("square3");
                    sq4 = document.getElementById("square4");

                    if (BPB == 1 && isMute == 1) {
                        if (sq1.style.backgroundColor == "black") {
                            strong.play();
                        } else if (sq1.style.backgroundColor == "rgb(149, 165, 166)") {
                            weak.play();
                        }
                    }

                    else if (BPB == 2 && isMute == 1) {
                        if (sq2.style.backgroundColor == "black") {
                            strong.play();
                        } else if (sq2.style.backgroundColor == "rgb(149, 165, 166)") {
                            weak.play();
                        }
                    }

                    if (BPB == 3 && isMute == 1) {
                        if (sq3.style.backgroundColor == "black") {
                            strong.play();
                        } else if (sq3.style.backgroundColor == "rgb(149, 165, 166)") {
                            weak.play();
                        }
                    }

                    else if (BPB == 4 && isMute == 1) {
                        if (sq4.style.backgroundColor == "black") {
                            strong.play();
                        } else if (sq4.style.backgroundColor == "rgb(149, 165, 166)") {
                            weak.play();
                        }
                    }

                    ++BPB;
                    if (BPB >= 5) {
                        --barTime;
                        BPB = 1;
                    }

                    if (barTime <= 0 || isBarOrSec == 1) {
                        clearInt();
                    }
                }, BPS);
            }

            else if (isBarOrSec == 1) {
                var timeMin = document.getElementById("timeMin").value;
                var timeMax = document.getElementById("timeMax").value;
                timeMin = parseInt(timeMin) + 1;
                timeMax = parseInt(timeMax) + 1;
                var waitTime = Math.floor(Math.random() * (timeMax - timeMin + 1)) + timeMin;

                time = parseInt(waitTime) * 1000;


                interval = setInterval(function interval() {
                    --waitTime;

                    document.getElementById("demo").innerHTML = key + chord + " for  " + waitTime + " seconds.";
                    noteHelp(chord);

                    if (waitTime <= 1 || isBarOrSec == 0) {
                        clearInt();
                    }
                }, 1000);
            }
        }
    }, 0);
}
start();



document.body.onkeyup = (e => {
    if(e.key === ' ') {
        startFinish();
    } else if (e.key === 'm') {
        muteSwitch();
    }
});