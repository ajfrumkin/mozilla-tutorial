const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/20221225_101650.jpg") {
    myImage.setAttribute("src", "images/firefox2.JPG");
  } else {
    myImage.setAttribute("src", "images/20221225_101650.jpg");
  }
};
