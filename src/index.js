// const toggleSubMenu = () => {
//   const elt = document.getElementById("popup-assignments")
//   console.log(getComputedStyle(elt, null).display)
//   let computed = getComputedStyle(elt, null).display
//   computed === "block"
//     ? (elt.style.display = "none")
//     : (elt.style.display = "block")
// }

// document.getElementById("assignments").addEventListener("click", toggleSubMenu)

async function fetchTopFive(sub) {
  const URL = sub;
  const fetchResult = fetch(URL)
  const response = await fetchResult;
  const jsonData = await response.json();
  console.log(jsonData);
}

fetchTopFive('https://dns.google.com/resolve?name=google.com');


const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"


// // function myFunction() {
document.getElementById("myFile").onchange = function (event){
  var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      console.log(reader.result)
      // var node = document.getElementById('output');
      // node.innerText = text;
      console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
}

function addCss(cssCode) {
  var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = cssCode;
    } else {
      styleElement.appendChild(document.createTextNode(cssCode));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
  }

  // document.getElementById('myFile').addEventListener('change', openFile, false);

  // addCss(`#next-button {
  //   // align-self: flex-end;
  // }`)


// x.addEventListener("click", callmeMaybe)
