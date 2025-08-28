// reuseable code
function eventHandaler(e) {
  return (heartNum = parseInt(document.getElementById(e).innerText));
}

// Heart Section
const heart = document.getElementsByClassName('heart');

for (const hrt of heart) {
  hrt.addEventListener('click', function () {
    let Num = eventHandaler('heartNum');
    Num++;
    document.getElementById('heartNum').innerText = Num;
  });
}

