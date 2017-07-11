var timer;
var go = document.getElementById('go');
var timeElement = document.getElementById('time');
var timeRemainElement = document.getElementById('timeRemain');

go.addEventListener('click', function () {
    clearInterval(timer);
    
    var time = timeElement.value;
    if (!time.length || isNaN(time)) { return; }

    var minutes = time * 60;
    showTime(minutes);

    timer = setInterval(function () {
        minutes--;

        if (minutes <= 0) {
            clearInterval(timer);
            showPopup();
        }

        showTime(minutes);
        
    }, 1000);

});

function showTime(minutes) {
    var m = Math.floor(minutes / 60);
    var s = String(minutes % 60);
    s = s.length < 2 ? '0' + s : s;
    timeRemainElement.innerHTML = m + ':' + s;
}

function showPopup() {
    var win = window.open("", "Time up", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=300, height=200, top=" + (screen.height / 2 - 300) + ", left=" + (screen.width / 2 - 150));
    win.document.body.innerHTML = "killer tomato";
}