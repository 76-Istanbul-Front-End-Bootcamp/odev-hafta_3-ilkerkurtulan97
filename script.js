class Animal {
  constructor(name) {
    this.name = name;
  }

  putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
  }

  action() {
    document.getElementById(this.actionSoundName).play();
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.legs = 4;
    this.actionText = "Meoow";
    this.actionSoundName = "meow";
  }

  putInTheDocument(){
    super.putInTheDocument();
  }

  action(){
    super.action();
  }


  
}

class Monkey extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
  }

  putInTheDocument(){
    super.putInTheDocument();
  }

  action(){
    super.action();
  }

}

let Mila = new Cat("Mila");
Mila.putInTheDocument();
let Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();

var firstDiv = document.getElementsByTagName("tr")[1];
var secondDiv = document.getElementsByTagName("tr")[2];
var firstElement = document.getElementsByTagName("td")[0];
var secondElement = document.getElementsByTagName("td")[3];
var imageCanvasMila = document.getElementById("myCanvasMila");
var imageCanvasCharlie = document.getElementById("myCanvasCharlie");
var clearPictureButton = document.getElementById("clearPictureButton");
var milaLegs = document.getElementsByTagName("td")[1];
var charlieLegs = document.getElementsByTagName("td")[4];



var imgMila = document.createElement("img");
imgMila.src = "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop";
var imgCharlie = document.createElement("img");
imgCharlie.src = "https://images.immediate.co.uk/production/volatile/sites/3/2020/01/18198683-low_res-baby-chimp-rescue-ad65871.jpg?quality=90&resize=768%2C574";




function changeColorMila(){
  firstDiv.style.backgroundColor = "green";
  firstElement.style.color = "white";
  milaLegs.style.color = "white";
}

function changeColorCharlie(){
  secondDiv.style.backgroundColor = "green";
  secondElement.style.color = "white";
  charlieLegs.style.color = "white";
}

function milaDefault(){
  firstDiv.style.backgroundColor = "white";
  firstElement.style.color = "black";
  milaLegs.style.color = "black";
}

function charlieDefault(){
  secondDiv.style.backgroundColor = "white";
  secondElement.style.color = "black";
  charlieLegs.style.color = "black";
}

function showPictureMila(){
  imageCanvasMila.appendChild(imgMila);
}

function showPictureCharlie(){
  imageCanvasCharlie.appendChild(imgCharlie);
}

function clearPicture(){
  imageCanvasMila.removeChild(imgMila);
  imageCanvasCharlie.removeChild(imgCharlie);
}



firstDiv.addEventListener("mouseover", changeColorMila);
firstDiv.addEventListener("mouseout", milaDefault);
secondElement.addEventListener("mouseover", changeColorCharlie);
secondElement.addEventListener("mouseout", charlieDefault);
firstElement.addEventListener("click", showPictureMila);
secondElement.addEventListener("click", showPictureCharlie);
clearPictureButton.addEventListener("click", clearPicture);
