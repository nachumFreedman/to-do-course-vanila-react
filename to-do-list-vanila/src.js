function newListItem(item){
  document.getElementById("to-do-ul").innerHTML += "<li class='listItem' id='li-"+item+"'>"+"- "+item+"<button onClick='removeListItem(this)' id='button-"+ item +"'> Delete</button></li>";
  document.getElementById("add-button-input-text").value = "";
}
function removeListItem(target){
  var itemId = target.id;
  itemId = itemId.replace("button", "li");
  document.getElementById(itemId).remove()
}
window.addEventListener("load", function(){
  var valueAdder = document.getElementById("add-button-input-text").value;
})
