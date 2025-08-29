// reuseable code
function eventHandler(e) {
  return parseInt(document.getElementById(e).innerText);
}

// Heart icon Section
const heart = document.getElementsByClassName('heart');
for (const hrt of heart) {
  hrt.addEventListener('change', function () {
    let Num = eventHandler('heartNum');
    if (hrt.checked) {
      Num++;
    } else {
      Num--;
    }
    document.getElementById('heartNum').innerText = Num;
  });
}

//copy paste section reuseable code
function copyBtn(id1, id2) {
  document.getElementById(id1).addEventListener('click', function () {
    const CopyNum = document.getElementById(id2);
    let Num = eventHandler('copyNum');
    Num++;
    document.getElementById('copyNum').innerText = Num;
    alert(` আপনি যে নাম্বারটি কপি করেছেন তা হচ্ছে :  ${CopyNum.innerText}
 `);
    navigator.clipboard.writeText(CopyNum.innerText);
  });
}
// add argument copy paste parameter
copyBtn('copy1', 'n1');
copyBtn('copy2', 'n2');
copyBtn('copy3', 'n3');
copyBtn('copy4', 'n4');
copyBtn('copy5', 'n5');
copyBtn('copy6', 'n6');
copyBtn('copy7', 'n7');
copyBtn('copy8', 'n8');
copyBtn('copy9', 'n9');

// call function

function eventCall(id1, id2, id3) {
  const callBtn = document.getElementById(id1);

  callBtn.addEventListener('click', function () {
    let coinNum = eventHandler('coinNum');

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

eventCall('callBtn1', 't1', 'n1');
eventCall('callBtn2', 't2', 'n2');
eventCall('callBtn3', 't3', 'n3');
eventCall('callBtn4', 't4', 'n4');
eventCall('callBtn5', 't5', 'n5');
eventCall('callBtn6', 't6', 'n6');
eventCall('callBtn7', 't7', 'n7');
eventCall('callBtn8', 't8', 'n8');
eventCall('callBtn9', 't9', 'n9');
