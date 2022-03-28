function createrElement(elementName, elementType, innerHTML, elementClass, id){
    let element1 = document.createElement(elementName);
    element1.innerHTML = innerHTML;
    element1.value = innerHTML;
    element1.type = elementType;
    element1.className = elementClass;
    element1.id = id;
    return element1;    
}
function spanElement(innerHTMLValue){
    let spanElement = document.createElement("span");
    spanElement.id = "lable";
    spanElement.innerHTML = innerHTMLValue;
    return spanElement;
}
function checkBox(){
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "check-box";
    return checkBox
}
document.getElementById("listElementCreator").addEventListener("keyup", function(event) {
    if(event.code === 'Enter' && this.value != ""){
        var tasksDiv1 = document.getElementById("div1");
        const tasksDiv = document.createElement("div");
        tasksDiv.className = "task-div";
        btnDelete = createrElement("button", "submit", "Delete", "delete-btn", "deleteBtn");
        btnEdit = createrElement("button", "submit", "Edit", "edit-btn", "editBtn");        
        checkBox1 = checkBox();
        spanElement1 = spanElement(this.value);
        btnDelete.addEventListener("click", function(){
            this.parentNode.remove();
        });
        btnEdit.addEventListener("click", function(){

            let editField = document.createElement("input");
            editField.type = "text";
            editField.value = this.parentNode.lastChild.innerHTML;
            debugger
            this.nextSibling.nextSibling.innerHTML = "";
            spanElement1.appendChild(editField);
            this.style.display = "none";
            var btnEditThis = this;            
            btnSave = createrElement("button", "submit", "Save", "save-btn", "saveBtn");
            btnSave.addEventListener("click", function(){                
                console.log("jjj: ",this.previousSibling.firstChild.value);
                let value1 = this.previousSibling.firstChild.value;
                console.log("value1: ",this.previousSibling)
                this.previousSibling.innerHTML = "";
                this.previousSibling.innerHTML = value1;
                console.log("save parent: ", this.parentNode);
                btnEditThis.style.display = "block";
                this.remove();
            });
            tasksDiv.appendChild(btnSave);
            console.log(this.nextSibling.nextSibling);            
        });
        checkBox1.addEventListener("click", function(){
            if (this.checked == true){
                console.log("i am checked");
                console.log(this.nextSibling);
                this.nextSibling.style.textDecoration = "line-through";                
            }else{
                console.log("i am not checked");
                this.nextSibling.style.textDecoration = "none";
            }
        });
        tasksDiv.appendChild(btnDelete);
        tasksDiv.appendChild(btnEdit);
        tasksDiv.appendChild(checkBox1);
        tasksDiv.appendChild(spanElement1);
        tasksDiv1.appendChild(tasksDiv)
        this.value = ""
    }   
});

