let draggedItem = null;
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
  draggedItem.classList.add("dragging");
}

function drop(event) {
  event.preventDefault();

  if (draggedItem) {
    container2.appendChild(draggedItem);
    draggedItem.classList.remove("dragging");
    draggedItem = null;

    document.getElementById("message").textContent =
      "Item dropped successfully!";
  }
}

function reset() {
  var images = document.querySelectorAll("img");
  console.log(images);
  for (var i = 0; i < images.length; i++) {
    container1.appendChild(images[i]);
  }

  while (container2.firstChild) {
    container2.removeChild(container2.firstChild);
  }

  document.getElementById("message").textContent = "";
}
