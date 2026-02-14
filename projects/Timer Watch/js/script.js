 let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timer = null;
    let lapCount = 0;

    const display = document.getElementById("display");
    const lapsDiv = document.getElementById("laps");
    const toggleBtn = document.querySelector(".toggle");

    function updateDisplay() {
        display.textContent =
            `${hours.toString().padStart(2,'0')}:` +
            `${minutes.toString().padStart(2,'0')}:` +
            `${seconds.toString().padStart(2,'0')}`;
    }

    function startTimer() {
        if (timer !== null) return;

        timer = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        pauseTimer();
        hours = minutes = seconds = 0;
        lapCount = 0;
        lapsDiv.innerHTML = "";
        updateDisplay();
    }

    function addLap() {
        if (!timer) return;

        lapCount++;
        const lapEl = document.createElement("div");
        lapEl.className = "lap";
        lapEl.innerHTML = `<span>Lap ${lapCount}</span><span>${display.textContent}</span>`;
        lapsDiv.prepend(lapEl);
    }

    function toggleTheme() {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "☀️";
    }