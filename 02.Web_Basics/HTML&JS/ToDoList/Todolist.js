let todos =[
    {id:1, title:"putzen", isDone: false},
    {id:2, title:"kochen", isDone: true},
    {id:3, title:"einkaufen", isDone: false},
    {id:4, title:"lernen", isDone: false}
]

let maxId = 4;

document.getElementById("input").addEventListener("change", function(event){
 console.log(event.target.value)
 maxId++;
 todos.push({id:maxId,title:event.target.value,isDone: false})
 printTasks();
 event.target.value = "";
})

function printTasks() {
 let html = "";
todos.forEach(element => {
 html += "<div class = 'task'>" + element.title + "-" + element.isDone + "<div>Done</div><div>Delete</div>"</div>";
});

document.getElementById("todos").innerHTML = html;
}

printTasks();
