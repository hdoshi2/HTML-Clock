var d, h, m, s, animate;

function init() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  clock();
}

function clock() {
  s++;
  if (s === 60) {
    s = 0;
    m++;
    if (m === 60) {
      m = 0;
      h++;
      if (h === 24) {
        h = 0;
      }
    }
  }
  // $('sec',s);
  document.getElementById("sec").innerHTML = s;
  // $('min',m);
  document.getElementById("min").innerHTML = m;
  // $('hr',h);
  document.getElementById("hr").innerHTML = h;

  animate = setTimeout(clock, 1000);
}

window.onload = init;
