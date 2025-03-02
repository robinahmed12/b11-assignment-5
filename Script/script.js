// completed button functionality

const buttons = document.querySelectorAll("#completed-btn");
for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i];
  btn.addEventListener("click", function (event) {
    alert("Board Update Successfully");

    btn.style.backgroundColor = "gray";
    btn.style.color = "black";
    event.target.classList.remove("bg-indigo-600");
    const count1 = document.getElementById("less-number");

    const convertedCount1 = parseInt(count1.innerText);

    const count2 = document.getElementById("add-number");

    const convertedCount2 = parseInt(count2.innerText);

    if (convertedCount1 > 0) {
      count1.innerText = convertedCount1 - 1;
      count2.innerText = convertedCount2 + 1;

      const container = document.getElementById("history-section");
      let activityCounter = 1;
      

      const currentTime = new Date().toLocaleTimeString();
      const title = document.querySelectorAll('#title');
      const titles = title.innerText;
      const div = document.createElement("div");

      div.innerHTML = `
      <div id="activity-log" class="bg-blue-50 text-black font-normal text-base w-[280px] ml-3 mt-8 rounded-3xl pl-3 pt-3 h-[90px]">
      <p>You have Complete The Task <br> ${titles} at + ${currentTime}</p>
       </div>`;

      container.appendChild(div);
      activityCounter++;

    } else {
      alert("Congrats You have done all current task");
    }
  });
}

// clear history functionality
const activityLog = document.querySelector("#clear-history-btn");

activityLog.addEventListener("click", function name(params) {
  const activityLog = document.querySelectorAll("#activity-log");
  for (const activity of activityLog) {
    activity.style.display = "none";
  }
});

// add blog page
const discover = document.querySelector("#discover");
discover.addEventListener("click", function () {
  window.location.href = "blog.html";
});

// local date

const currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = daysOfWeek[currentDate.getDay()];
const date = currentDate.toLocaleDateString();

document.querySelector("#local-date").innerText = `${day}, ${date}`;


// bg change random

function getRandomColor() {
  let letter = '0123456789ABCDEF';
  let color = '#';
  
  
  for (let i = 0; i < 6; i++) {

    color+= letter[Math.floor(Math.random() * 16)];
  }

  return color;
}


const colorChangeBtn = document.getElementById('change-color-btn');

colorChangeBtn.addEventListener('click' ,
  function () {
   document.body.style.background = getRandomColor();
  }
)
