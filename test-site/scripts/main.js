const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bikefront.JPG") {
    myImage.setAttribute("src", "images/bikeback.JPG");
  } else {
    myImage.setAttribute("src", "images/bikefront.JPG");
  }
};
