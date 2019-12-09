function validateForm() {
	var name = document.forms["form"]["name"].value;
	var age = document.forms["form"]["age"].value;
	if (name == "") {
		alert("Name can't be empty");
		return false;
	}
	if (isNaN(age) || age < 0 || age > 130 || age == "") {
		alert("Invalid age");
		return false;
	}
}

function onDragStart(event) {
	event.dataTransfer.setData("text/plain", event.target.id);
	//event.currentTarget.style.backgroundColor = "yellow";
}

function onDragOver(event) {
	event.preventDefault();
}

function onDrop(event) {
	var id = event.dataTransfer.getData("text");
	var e = document.getElementById(id);
	var d = event.target;
	d.appendChild(e);
	event.dataTransfer.clearData();
}