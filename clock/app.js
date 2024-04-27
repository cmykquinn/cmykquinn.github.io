window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes();

    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;

    const hourTime = hour > 12 ? hour - 12 : hour;

    const ampm = hour < 12 ? "AM" : "PM";

    const time = hourTime + ":" + minute + ":" + ampm;
    const dateTime = time;
    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});
