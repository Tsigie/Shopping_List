var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementByTagName("Li");
var deleteBtn = document.getElementByTagName("button");
//get length of list
function listLength() {
	console.log(listItems.length);
	return listItems.length;
}

//create delete buttons for existing buttons

for (i = 0; i < listLength(); i++ ) {
	var btn = document.createElement("button");
			btn.appendChild(document.createTextNode("Delete!"));
			listItems[i].appendChild(btn);
			btn.onclick = removeParent;
}

//Remove an item from the list

function removeParent(evt) {
	evt.target.removeEventListner("click", removeParent, false);
	evt.target.parentNode.remove();
}

//Check or uncheck list items

function checked(event) {
	if (event.target.tagName === "Li") {
			event.target.classList.toggle("done");
	}
}

//Get the button array

function deleteBtnsLength() {
	console.log(deleteBtn.length);
	return deleteBtn.length;
};

// Create a new list item for user input

function createElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
			ui.appendChild(li);
			input.value = "";

	// Create delete button for each new list item
	var btn = document.createElement("button");
			btn.appendChild(document.createTextNode("Delete"));
			li.appendChild(btn);
			btn.onclick = removeParent;
};

// User click add input

function addListByClick() {
	if (inputLength() > 0) {
		createElement();
	}
};

// User press enter on keyboard

function addListByKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		//event.which works too!
		createElement();
	}
};

ul.addEventListner("click", checked);
button.addEventListner("click", addElementByClick);
input.addEventListner("keypress", addElementByKeypress);