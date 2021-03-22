var list = document.getElementsByClassName("list")[0];
var userInput = document.getElementById("user-input");

var i = 0;

userInput.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addItem();
  }
});

function addItem(){
  var node0 = document.createElement("div");
  var node1 = document.createElement("input");
  var node2 = document.createElement("p");

  node0.className = "to-do-items";
  node1.type = "checkbox";
  node2.innerHTML = userInput.value;

  node0.style.background = randomColor();

  node0.appendChild(node1);
  node0.appendChild(node2);
  
  list.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("dblclick", function(){
  node0.remove();
  })
  document.getElementById("user-input").value = '';
}

function randomColor(){
  var random_colors = ['#5e807f', '#17b890','#9dc5bb', '#dee5e5'];

  if(i > random_colors.length - 1){
    i = 0;
  }
  return random_colors[i++];
}
