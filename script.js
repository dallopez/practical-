var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

var elements = [];

//function  for variables
function lines(string) {
  var that = this;
  this.value = string.value;
 if (string == 3) {
    this.message = "is below 10.";
  } else if (string == "Jerry") {
    this.message = "is normal.";
  } else if (string == "Sandy") {
    this.message = "is normal.";
  } else if (string == 4) {
    this.message = "is below 10.";
  } else if (string == "Pepper") {
    this.message = "is more than 5 characters.";
  } else if (string == 15) {
    this.message = "is exactly 15.";
  } else if (string == "Jocastah") {
    this.message = "is more than 5 characters.";
  } else if (string == 12) {
    this.message = "is normal.";
  }
  
  //shows message and changes any element to a diff color
  this.color = "The value is " + string + " and " + this.message;
  this.ele = document.createElement("div");
  this.eleColor = document.createElement("div");
  this.eleColor.innerHTML = this.color;
  this.eleValue = document.createElement("div");
  this.ele.addEventListener("click", function () {
    that.changeColor();
  });
  
  this.ele.appendChild(this.eleColor);
  this.ele.appendChild(this.eleValue);
  document.body.appendChild(this.ele);
}

//changes color to blue
lines.prototype.changeColor = function () {
  this.eleColor.style.color = "blue";
};

for (var i = 0; i < stringers.length; i++) {
  elements.push(new lines(stringers[i]));
}