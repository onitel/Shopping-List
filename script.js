var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var toDoList = document.getElementById("parent-list");
var removeButtons = document.getElementsByClassName("remove");

var deleteAll = document.getElementById("deleteAll");
var parent = document.getElementById("parent-list");
// var btndelete = document.getElementsByClassName("remove")

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
	li.appendChild(document.createTextNode("\xa0"+input.value+" "));
	li.appendChild(button);
	ol.appendChild(li);
	input.value = "";
}

// aceasta functie de mai jos e special facuta ca sa stearga de pe lista cu ajutorul lui buton ceea ce adug eu nou
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
  // e.target is our targetted element.
                // try doing console.log(e.target.nodeName), it will result LI
				if(e.target && e.target.nodeName == "LI") {
					console.log(e.target.id + " was clicked");
					e.target.classList.toggle("done");
				}
}

// { for (var i = 0; i < removeButtons.length; i++) {
// 	btndelete[i].addEventListener('click', function(e) {
// 	//   e.currentTarget.parentNode.remove();
// 	//   this.closest('.single').remove() // in modern browsers in complex dom structure
// 	//   this.parentNode.remove(); //this refers to the current target element 
// 	  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
// 	}, false);
//   }
// }

// aceasta functie cat si cele de mai sus sunt pentru a sterge produsele deja listate pe pagina
	Array.from(removeButtons).forEach((removeButton) => {
	removeButton.addEventListener('click', () => {
	  removeButton.parentNode.remove();
	});
  });

// asta e o funcite care sterge totul din lista  
function deleteList(){
	parent.innerHTML = "";
	}

// aici mai jos am mai multe functii care daca apas klic sau dau enter, si mai sunt si alte event reference
// nu doar "click" sau "keypress" ap activeaza functia de alaturi cum ar fi addListAfterClik sau addListAfterKeypress
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

toDoList.addEventListener("click", addLineIfClicked);

deleteAll.addEventListener("click", deleteList);