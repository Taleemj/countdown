const countdown = () => {
  const newyear = new Date("January 1, 2024 00:00:00").getTime();
  const now = Date.now();
  const gapbetween = newyear - now;

  // time
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const day = hours * 24;

  // getting countdown time
  const textday = Math.floor(gapbetween / day);
  const texthour = Math.floor((gapbetween % day) / hours);
  const textminutes = Math.floor((gapbetween % hours) / minutes);
  const textseconds = Math.floor((gapbetween % minutes) / seconds);

  var dday = document.getElementById("day");
  var dhour = document.getElementById("hour");
  var dminutes = document.getElementById("minutes");
  var dseonds = document.getElementById("seconds");

  textday < 10
    ? (dday.textContent = "0" + textday)
    : (dday.textContent = textday);
  texthour < 10
    ? (dhour.textContent = "0" + texthour)
    : (dhour.textContent = texthour);
  textminutes < 10
    ? (dminutes.textContent = "0" + textminutes)
    : (dminutes.textContent = textminutes);
  textseconds < 10
    ? (dseonds.textContent = "0" + textseconds)
    : (dseonds.textContent = textseconds);
};

setInterval(countdown, 1000);
