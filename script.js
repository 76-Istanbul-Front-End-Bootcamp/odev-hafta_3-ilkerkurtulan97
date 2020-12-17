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
    this.animalUrl = "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop";
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
    this.animalUrl = "https://images.immediate.co.uk/production/volatile/sites/3/2020/01/18198683-low_res-baby-chimp-rescue-ad65871.jpg?quality=90&resize=768%2C574";
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


var firstElement = document.getElementsByTagName("td")[0];
var secondElement = document.getElementsByTagName("td")[3];
var clearPictureButton = document.getElementById("clearPictureButton");
var animalImage = document.getElementById("animalImage");
var imageCanvas = document.getElementsByClassName("imageCanvas");


function showPictureMila(){
  animalImage.src = this.animalUrl;
}

function showPictureCharlie(){
  animalImage.src = this.animalUrl;
}

function clearPicture(){
  var animalImage = document.getElementById("animalImage");
  animalImage.src = "";
}


firstElement.addEventListener("click", showPictureMila.bind(Mila));
secondElement.addEventListener("click", showPictureCharlie.bind(Charlie));
clearPictureButton.addEventListener("click", clearPicture);

