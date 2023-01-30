const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bikefront.JPG") {
    myImage.setAttribute("src", "images/bikeback.JPG");
  } else {
    myImage.setAttribute("src", "images/bikefront.JPG");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Cycling is fun, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Cycling is fun, ${storedName}`;
}

  
myButton.onclick = () => {
setUserName();
};
