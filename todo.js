const submit = document.getElementById("submit");
const clearList = document.getElementById("clearList");
const list = document.getElementById("list");
const item = document.getElementById("item");

function addList() {
  itemLength = item.value.length;
  console.log(itemLength);
  if (itemLength > 50) {
    window.alert("maximum of 50 characters");
    item.value = "";
  } else {
    console.log("add list pressed");
    let newItem = item.value;

    if (newItem.trim() != "") {
      const listItem = document.createElement("li");
      listItem.textContent = newItem;

      const removeButton = document.createElement("button");
      removeButton.classList.add("myformat");
      removeButton.textContent = "remove";
      removeButton.addEventListener("click", function () {
        list.removeChild(listItem);
      });

      list.appendChild(listItem).appendChild(removeButton);
      item.value = "";
    }
  }
}
function emptyList() {
  console.log("Empty list pressed");
  list.innerHTML = "";
}
submit.addEventListener("click", addList);
clearList.addEventListener("click", emptyList);
