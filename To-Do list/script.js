const inputBox= document.getElementById("input-box");
const listcontainer= document.getElementById("listcontainer");
function Addtask(){
if(inputBox.value === ''){
    alert("You must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputBox.value="";
 savedata();

}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagname === "LI"){
        e.target.classlist.toggle("checked");
        savedata();
    }
    else if(e.target.tagname === "SPAN"){
        e.target.parentelement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
