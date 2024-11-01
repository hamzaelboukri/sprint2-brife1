let tasks = [];
let taskidcounter = 1
function add() {




  const input = document.getElementById('input').value
  const select = document.getElementsByName("task-option")[0].value
  const date = document.getElementById("date").value





  const taskid = taskidcounter++;
  tasks.push({
    id: taskid,
      name: input,
      etat: select
      , date: date
    })
  // alert("Task added successfully!");
  console.log(tasks);


  if (select === "to do") {

    const toDoSection = document.querySelector(".to-do");
    const taskElement = document.createElement("span");
    taskElement.classList.add('span1')

    taskElement.textContent = `${input}`;
    toDoSection.appendChild(taskElement);
    taskElement.setAttribute("data-taskid", taskid); 
    toDoSection.appendChild(taskElement)

    const taskElement1 = document.createElement("p");

    taskElement1.textContent = `${date}`;
    toDoSection.appendChild(taskElement1);
    taskElement1.classList.add('p2');
    taskElement1.setAttribute("data-taskid", taskid); 
    toDoSection.appendChild(taskElement1)
    //creat buttone edit 
    const editbutton = document.createElement("button");
    editbutton.textContent = "edit";
    editbutton.classList.add('editbutton');
  
    toDoSection.appendChild(editbutton);
  
    
    editbutton.addEventListener('click', () => {
      modifier(taskid);
    });

    // creat button suprimer 
    const suprimerbutton =document.createElement("button");
    suprimerbutton.classList.add('suprimerbutton');
    suprimerbutton.textContent="suprimer";
    

    suprimerbutton.onclick = () => suprimer(task.id); 
    toDoSection.appendChild(suprimerbutton);
    
    toDoSection.appendChild(suprimerbutton);
    
    // suprimer.addEventListener("click",()=> {suprimer (taskidcounter - 1) } );
    //localstorge
    const localtask = input + " " + date;
    // localStorage.setItem("id", localtask);
    localStorage.setItem("id", JSON.stringify(localtask));

    //to suprimer in tablo
    document.getElementById('input').value = " ";
    document.getElementsByName("task-option")[0].value = " ";
    document.getElementById("date").value = " ";

  }


  if (select === "doing") {

    const toDoSection = document.querySelector(".doing");
    const taskElement = document.createElement("span");
    taskElement.classList.add('span1')

    taskElement.textContent = `${input}`;
    toDoSection.appendChild(taskElement);

    const taskElement1 = document.createElement("p");

    taskElement1.textContent = `${date}`;
    toDoSection.appendChild(taskElement1);
    taskElement1.classList.add('p2');



       //creat buttone edit 
       const editbutton = document.createElement("button");
       editbutton.textContent = "edit";
       editbutton.classList.add('editbutton');
     
       
       toDoSection.appendChild(editbutton);
     
       
       editbutton.addEventListener('click', () => {
         modifier(taskid);
       });
   
       // creat button suprimer 
       const suprimerbutton =document.createElement("button");
       suprimerbutton.classList.add('suprimerbutton');
       suprimerbutton.textContent="suprimer";
       
   
       suprimerbutton.onclick = () => suprimer(task.id); 
       toDoSection.appendChild(suprimerbutton);
       
       toDoSection.appendChild(suprimerbutton);
    //localstorge
    const localtask = input + " " + date;
    localStorage.setItem("taskDoing", localtask);
    localStorage.setItem("id", localtask);
    //to suprimer in tablo
    document.getElementById('input').value = " ";
    document.getElementsByName("task-option")[0].value = " ";
    document.getElementById("date").value = " ";
  }
  if (select === "done") {

    const toDoSection = document.querySelector(".done");

    // const edit = document.createElement("i");
    const taskElement = document.createElement("span");
    taskElement.classList.add('span1')

    taskElement.textContent = input;
    toDoSection.appendChild(taskElement);

    const taskElement1 = document.createElement("p");

    taskElement1.textContent = `${date}`;
    toDoSection.appendChild(taskElement1);
    taskElement1.classList.add('p2');




       //creat buttone edit 
       const editbutton = document.createElement("button");
       editbutton.textContent = "edit";
       editbutton.classList.add('editbutton');
     
       
       toDoSection.appendChild(editbutton);
     
       
       editbutton.addEventListener('click', () => {
         modifier(taskid);
       });
   
       // creat button suprimer 
       const suprimerbutton =document.createElement("button");
       suprimerbutton.classList.add('suprimerbutton');
       suprimerbutton.textContent="suprimer";
       
   
       suprimerbutton.onclick = () => suprimer(task.id); 
       toDoSection.appendChild(suprimerbutton);
       
       toDoSection.appendChild(suprimerbutton);
    //localstorge
    const localtask = input + " " + date;
    localStorage.setItem("taskDone", localtask);
    localStorage.setItem("id", localtask);
    //to suprimer in tablo
    document.getElementById('input').value = " ";
    document.getElementsByName("task-option")[0].value = " ";
    document.getElementById("date").value = " "
  }
  if (select === "holed") {

    const toDoSection = document.querySelector(".holed");
    const taskElement = document.createElement("span");
    taskElement.classList.add('span1')

    taskElement.textContent = `${input}`;
    toDoSection.appendChild(taskElement);

    const taskElement1 = document.createElement("p");

    taskElement1.textContent = `${date}`;
    toDoSection.appendChild(taskElement1);
    taskElement1.classList.add('p2');


       //creat buttone edit 
       const editbutton = document.createElement("button");
       editbutton.textContent = "edit";
       editbutton.classList.add('editbutton');
     
       
       toDoSection.appendChild(editbutton);
     
       
       editbutton.addEventListener('click', () => {
         modifier(taskid);
       });
   
       // creat button suprimer 
       const suprimerbutton =document.createElement("button");
       suprimerbutton.classList.add('suprimerbutton');
       suprimerbutton.textContent="suprimer";
       
   
       suprimerbutton.onclick = () => suprimer(task.id); 
       toDoSection.appendChild(suprimerbutton);
       
       toDoSection.appendChild(suprimerbutton);

    //localstorge

    const localtask = input + " " + date;
    localStorage.setItem("taskHolde", localtask);
    localStorage.setItem("id", localtask);

    //to suprimer in tablo
    document.getElementById('input').value = " ";
    document.getElementsByName("task-option")[0].value = " ";
    document.getElementById("date").value = " "
  }
}



function modifier(taskid) {
  const task = tasks.find(task => task.id === taskid);
  if (task) {
  const span = document.getElementsByClassName("span1")[0].innerText;
  const p = document.getElementsByClassName("p2")[0].innerText;
  document.getElementById('input').value = span;

  const date = new Date().toISOString().slice(0, 10);
  document.getElementById("date").value = p;

  document.getElementsByClassName("span1")[0].innerText = " ";
  document.getElementsByClassName("p2")[0].innerText = "";

  document.getElementsByClassName("editbutton")[0].innerText="";
  document.getElementsByClassName("suprimerbutton")[0].innerText="";
  


}

}
function suprimer(taskid) {
  const index = tasks.findIndex(task => task.id === taskid);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log("Task deleted:", taskid);

    const toDoSection = document.querySelector(".to-do");
    toDoSection.querySelectorAll(`[data-taskid="${taskid}"]`).forEach(elem => elem.remove());
  }
}




  
