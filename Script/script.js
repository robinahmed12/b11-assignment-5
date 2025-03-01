
const buttons = document.querySelectorAll('#completed-btn');
for (let i = 0; i < buttons.length; i++) {

    const btn = buttons[i];
    btn.addEventListener('click' ,
        function (event) {

            alert('Board Update Successfully');


           const count1 =document.getElementById('less-number');
           
           const convertedCount1 = parseInt(count1.innerText);
           
           

           const count2 =document.getElementById('add-number');
           
           
           const convertedCount2 = parseInt(count2.innerText);
           

           if (convertedCount1 > 0) {
            count1.innerText = convertedCount1 - 1;
            count2.innerText = convertedCount2 + 1;
           }

           else {
            alert('Congrats You have done all current task');
           }
        }
    )
    
}