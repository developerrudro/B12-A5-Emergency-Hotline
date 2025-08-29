// reuseable code
function eventHandaler(e) {
  return parseInt(document.getElementById(e).innerText);
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

const copy = document.getElementsByClassName('copy');

for (const cpy of copy) {
  console.log(cpy)
  cpy.addEventListener('click', function () {
    let Num = eventHandaler('copyNum');
    Num++;
    document.getElementById('copyNum').innerText = Num;
  });
}



// call function

function evnetCall(id1, id2, id3) {
  const callBtn = document.getElementById(id1);

  callBtn.addEventListener('click', function () {
    let coinNum = eventHandaler('coinNum');

    if (coinNum < 20) {
      alert(' আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই...');
      return;
    }
    if (coinNum >= 20) {
      coinNum -= 20;
      document.getElementById('coinNum').innerText = coinNum;
    }
    const data2 = document.getElementById(id3).innerText;
    const data1 = document.getElementById(id2).innerText;
    console.log(data1);
    alert(`📞 কল করা হচ্ছে
    ${data1} ${data2}...`);

    const div = document.createElement('div');
    console.log(div);
    div.innerHTML = `
 <div class="bg-[#FAFAFA] flex p-2 rounded-xl my-5 justify-between">

        <div class="mr-14">
          <h2 class="text-[#111] font-normal">${data1}</h2>
          <span class="text-[#5C5C5C] font-normal">${data2}</span>
        </div>
        <p>${new Date().toLocaleTimeString()}</p>


      </div>

`;
    console.log(div);
    document.getElementById('history').appendChild(div);
  });
}

// Clear History section
document.getElementById('clear').addEventListener('click', function () {
  const history = document.getElementById('history');
  if (history.lastChild) {
    history.innerHTML = '';
  }
});

evnetCall('callBtn1', 't1', 'n1');
evnetCall('callBtn2', 't2', 'n2');
evnetCall('callBtn3', 't3', 'n3');
evnetCall('callBtn4', 't4', 'n4');
evnetCall('callBtn5', 't5', 'n5');
evnetCall('callBtn6', 't6', 'n6');
evnetCall('callBtn7', 't7', 'n7');
evnetCall('callBtn8', 't8', 'n8');
evnetCall('callBtn9', 't9', 'n9');
