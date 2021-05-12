var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var toDoList = document.getElementById("parent-list");

var removeButtons = document.getElementsByClassName("remove");
var deleteAll = document.getElementById("deleteAll");
var parent = document.getElementById("parent-list");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	button.setAttribute("class","remove");
	button.onclick = removeParent;
	li.setAttribute("id","a");
	li.appendChild(document.createTextNode("\xa0"+input.value+"\xa0"));
	li.appendChild(button);
	ol.appendChild(li);
	input.value = "";
}

function removeParent(evt){
	evt.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addLineIfClicked(e) {
				if(e.target && e.target.nodeName == "LI") {
					e.target.classList.toggle("done");
				}
}

	Array.from(removeButtons).forEach((removeButton) => {
	removeButton.addEventListener('click', () => {
	  removeButton.parentNode.remove();
	});
  });

function deleteList(){
	parent.innerHTML = "";
	}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
toDoList.addEventListener("click", addLineIfClicked);
deleteAll.addEventListener("click", deleteList);