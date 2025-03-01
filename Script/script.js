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
      console.log(activityCounter);

      const currentTime = new Date().toLocaleTimeString();
      const title = document.getElementById('title').innerText;
      const div = document.createElement("div");

      div.innerHTML = `
      <div id="activity-log" class="bg-blue-50 text-black font-normal text-base w-[280px] ml-3 mt-8 rounded-3xl pl-3 pt-3 h-[90px]">
      <p>You have Complete The Task <br> ${title} at + ${currentTime}</p>
       </div>`;

      container.appendChild(div);
      activityCounter++;

    } else {
      alert("Congrats You have done all current task");
    }
  });
}

// clear history functionality
// const clearBtn = document.getElementById('clear-history-btn');
// clearBtn.addEventListener('click' , 
//   function (event) {
//     const activityLog = document.getElementById('activity-log');

//   }
    
  
const discoverSomeThing = document.getElementById('discover-something');
discoverSomeThing.addEventListener('click' ,
  function (event) {
    window.location.href = './blog.html';
  }
)

