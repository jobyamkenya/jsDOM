var h1 = document.createElement('H1');
h1.style.marginLeft ="480px";
var h1Text = document.createTextNode("HERE FROM JS BABY");
h1.appendChild(h1Text);
document.body.appendChild(h1);


//create a div
var divContainer = document.createElement("Div");
divContainer.id="container";

//create div's styles
divContainer.style.width = "500px";
divContainer.style.height = "400px";
divContainer.style.textAlign = "center";
divContainer.style.marginLeft = "400px";
divContainer.style.fontWeight = "bold";
divContainer.style.fontSize = "large";
divContainer.style.padding = "20px 20px 20px 20px";
divContainer.style.background ="#AAAAAA";

//add content to the div
var h1 = document.createElement('h1');
var h1Text = document.createTextNode("MY DIV MY TEXT from JS");
h1.appendChild(h1Text);

divContainer.appendChild(h1);

//create a button
var msgeBtn = document.createElement('Button');
var btTitle = document.createTextNode('message');
msgeBtn.appendChild(btTitle);
msgeBtn.addEventListener('click', displayMsg);

function displayMsg(){
	alert('You just learned some DOM, aint that right');
}


divContainer.appendChild(msgeBtn);

//append the whole div to body

document.getElementsByTagName("body")[0].appendChild(divContainer);


