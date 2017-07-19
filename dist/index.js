var timer;
var flashTimer;
var go = document.getElementById('go');
var twentyFive = document.getElementById('twenty-five');
var five = document.getElementById('five');
var timeElement = document.getElementById('time');
var timeRemainElement = document.getElementById('timeRemain');

go.addEventListener('click', function () {
    var minutes = timeElement.value;
    if (!minutes.length || isNaN(minutes)) { return; }
    startTimer(minutes);
});

twentyFive.addEventListener('click', function () {
    startTimer(25);
});

five.addEventListener('click', function () {
    startTimer(5);
});

function flashTitle() {
    flashTimer = setInterval(function () {
        document.title = document.title === "Done" ? "Killer Tomato" : "Done";
    }, 1000);
}

function showTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = String(seconds % 60);
    s = s.length < 2 ? '0' + s : s;
    timeRemainElement.innerHTML = m + ':' + s;
}

function showPopup() {
    var win = window.open("", "Time up", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=300, height=200, top=" + (screen.height / 2 - 300) + ", left=" + (screen.width / 2 - 150));
    win.document.body.innerHTML = "<div>Killer Tomato!</div>";
    
    var script = win.document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML='setInterval(function () { document.title = document.title === "Done" ? "Killer Tomato" : "Done"}, 1000)';
    win.document.body.appendChild(script);
}

function startTimer(minutes) {
    clearInterval(flashTimer);
    clearInterval(timer);
    
    var seconds = minutes * 60;
    showTime(seconds);

    timer = setInterval(function () {
        seconds--;

        if (seconds <= 0) {
            clearInterval(timer);
            showPopup();
            flashTitle();
        }

        showTime(seconds);
        
    }, 1000);
}