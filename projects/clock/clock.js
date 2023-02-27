let alarmTime = null;

document.getElementById("alarm-button").addEventListener("click", function() {
  const input = document.getElementById("alarm-input");
  if (input.style.display === "none") {
    input.style.display = "block";
  } else {
    input.style.display ="none";
  }
});


document.getElementById("alarm-input").addEventListener("change", function() {
  const input = document.getElementById("alarm-input").value;

  if (input) {
    alarmTime = new Date();
    let [time, ampm] = input.split(" ");
    let [hours, minutes] = time.split(":").map(val => parseInt(val));
    if (ampm === "PM" && hours !== 12) {
      hours += 12;
    }
    if (ampm === "AM" && hours === 12) {
      hours = 0;
    }
    alarmTime.setHours(hours, minutes, 0);
  }
});

const alarmSound = document.getElementById("alarm-sound");

function updateTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = "AM";
  
  if (hours >= 12) {
    ampm = "PM";
    hours = hours % 12 || 12;
  }
  
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  
  const time = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("time").innerHTML = time;
  
  if (alarmTime && date.getTime() >= alarmTime.getTime()) {
    alarmSound.play();
    alarmTime = null;
  }
}
setInterval(updateTime, 1000);


const timeZones = [
  { name: "Philippines", offset: 8 },
  { name: "China", offset: 8 },
  { name: "Japan", offset: 9 },
  { name: "Russia", offset: 3 },
  { name: "USA", offset: -5 },
  { name: "UK", offset: 0 },
  { name: "Australia", offset: 10 },
  { name: "Brazil", offset: -3 },
  { name: "India", offset: 5.5 },
  { name: "France", offset: 1 }
];

function updateWorldClock() {
  const worldClock = document.getElementById("world-clock");
  worldClock.innerHTML = "";

  timeZones.forEach(function(timeZone) {
    const date = new Date();
    const offsetTime = date.getTime() + (date.getTimezoneOffset() * 60 * 1000) + (timeZone.offset * 60 * 60 * 1000);
    const localTime = new Date(offsetTime);

    let hours = localTime.getHours();
    let minutes = localTime.getMinutes();
    let seconds = localTime.getSeconds();
    let ampm = "AM";

    if (hours >= 12) {
      ampm = "PM";
      hours = hours % 12 || 12;
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const time = `${hours}:${minutes}:${seconds}${ampm}`;
    const timeZoneDisplay = `<option value="${timeZone.name}: ${time}">${timeZone.name}: ${time}</option>`;

    worldClock.innerHTML += timeZoneDisplay;
  });
}

const showTimeZoneButton = document.getElementById("show-time-zone-button");
showTimeZoneButton.addEventListener("click", function() {
  const worldClock = document.getElementById("world-clock");
  if (worldClock.style.display === "none") {
    worldClock.style.display = "block";
  } else {
    worldClock.style.display = "none";
  }
});

setInterval(updateWorldClock, 1000);

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let date = new Date();
let day = date.getDay();
let days = document.querySelectorAll('.day');
let toggle = document.getElementById("dark-mode");
let darkMode = false;

for (let i = 0; i < days.length; i++) {
    if (i === day) {
        days[i].style.color = "#5e8388";
    } else {
        days[i].style.color = "white";
    }
}

toggle.addEventListener("click", () => {
    darkMode = !darkMode;

    for (let i = 0; i < days.length; i++) {
        if (i === day) {
            days[i].style.color = darkMode ? "white" : "#5e8388";
        } else {
            days[i].style.color = darkMode ? "black" : "white";
        }
    }

    console.log("Dark mode:", darkMode);
});





