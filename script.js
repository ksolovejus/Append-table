var inputFName = document.getElementById("fname");
var inputLName = document.getElementById("lname");
var inputAge = document.getElementById("age");
var table = document.getElementById("table");

var buttonAdd = document.getElementById("add");
var buttonRemoveFirst = document.getElementById("remove-first");
var buttonRemoveLast = document.getElementById("remove-last");

buttonAdd.addEventListener("click", function () {
if (inputFName.value &&  inputLName.value && inputAge.value){
var row = document.createElement("tr")

var fName = document.createElement("td")
fName.innerText = inputFName.value
row.appendChild(fName)

var lName = document.createElement("td")
lName.innerText = inputLName.value
row.appendChild(lName)

var age = document.createElement("td")
age.innerText = inputAge.value
row.appendChild(age)

table.appendChild(row)

inputFName.value = ""
inputLName.value = ""
inputAge.value = ""

    } else {
        alert("Laukelis yra tuščias");
    }
});

buttonRemoveFirst.addEventListener("click", function () {
    var tr = document.getElementsByTagName("tr")

    if(tr.length){
        tr[1].remove()
    } else {
        alert("Nebėra ką trinti")
    }

})

buttonRemoveLast.addEventListener("click", function () {
    var tr = document.getElementsByTagName("tr")

    if(tr.length+1){
        tr[1].remove()
    } else {
        alert("Nebėra ką trinti")
    }

})