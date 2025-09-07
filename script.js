const body = document.querySelector('body');
const btn = document.querySelectorAll('.btn');

btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'dark') {
      if (body.style.backgroundColor !== "black") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        e.target.textContent = "☀️";
      } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        e.target.textContent = "🌙";
      }
    }
  });
});
