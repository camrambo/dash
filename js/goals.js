//check cache
var cachedList = localStorage.getItem('savedList');
function checkTheCache() {
if (cachedList != null) {
	$('.listContainer').html(cachedList);
}
}
checkTheCache();

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.classList.add("toDoItem");
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field

	//START STRIKETHROUGH
	function crossOut() {
		li.classList.toggle("done");
	}
	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH

	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode(""));
	dBtn.innerHTML = '<i class="fas fa-times"></i>';
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		var deleteNode = $(this).closest('li');
		deleteNode.addClass("delete");
		var enteredList = $('.listContainer').html().trim();
		localStorage.setItem('savedList', enteredList);
	}
	//END ADD CLASS DELETE
}

$('.toDoItem button').on('click', deleteListItem2);
function deleteListItem2(){
	var deleteNode = $(this).closest('li');
	deleteNode.addClass("delete");
	var enteredList = $('.listContainer').html().trim();
	localStorage.setItem('savedList', enteredList);
}

function addListAfterClick(){
if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
	createListElement();
	var enteredList = $('.listContainer').html().trim();
	localStorage.setItem('savedList', enteredList);
}

}

function addListAfterKeypress(event) {
if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
	//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
	createListElement();
	var enteredList = $('.listContainer').html().trim();
	localStorage.setItem('savedList', enteredList);
} 

}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//on button click, show/hide the to-do list
$('.listHiderBTN').on('click', toggleToDoList);
function toggleToDoList() {
	$('.toDoListNode').toggleClass("showThisNode");

	if ($('.toDoListNode').hasClass("showThisNode")) {
		$('.listHiderBTN').text("Hide To-Do List");
	} else {
		$('.listHiderBTN').text("Show To-Do List")
	}
};
