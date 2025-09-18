// window object 
// console.log(document);    (Thora HTML,CSS)
// console.dir(document);     (long code javascript)

// const { Children } = require("react")


// console.dir(document.all[6].innertext);       all-sab a jaty       [6]-index ma h1 para  innerText-value



//getElementsById ............................................................................
             // mainImg,srctagName (reserved words)         
// document.getElementById("mainImg");    mainImg-id name
// let imgObj=document.getElementById("mainImg");
// imgObj.src
// imgObj.tagName



// getElementcByClassName.....................................................................
// document.getElementByClassName("oldImg");
// document.getElementByClassName("oldImg")[0]; class ma zayada objects hoty to is wjh sa [0],[1]indexes aty



// getElementsByTagName...........................................................................
// document.getElementBytagName("p");
// document.getElementBytagName("p")[1].innerText;     0-tagname   1-description    

   
// -------------------------------------------------------------------------------------------------------------



// QERY SELECTOR 
// document.querySelector("p");   For tags
// document.querySelector("#Id");   For ID
// document.querySelector(".class");   For class 

// document.querySelectorAll("p");   For all 
// -------------------------------------------------------------------------------------------------------



// innerText(screen ma show)        innerHTML                 textContent(hidden jo screen pr ni poora)/n or display:none
// para.innerText="Hi I am Zumer";
// para.innerHTML="Hi I  <b>am<b> Zumer";

  


// manipualting attributes (id,class,img)
// Object.getAttribute(attr);
// Object.setAttribute(attr,val);    at a time 1 set so xxxxxxxxxxxxxxxxxxxxxxxxxxxx




// styling
// Object.style.color="purple";


// classList
// Object.classList;
// Object.classList.add("green");   //styling
// Object.classList.remove("green");   //styling
// Object.classList.contains("green");   //styling mojoodgi
// Object.classList.toggle("green");   //styling  switch(yes-no/no-yes)just press


// NAVIGATION ............................................................................................
// parentElement
// children[0],[1] 
// previousElementSibling/nextElementSibling
// childElementCount


// adding Element..............................................................................................
// document.createElement("p");
// p.appendChild(el);   page last 
// p.appendChild(el);   page start
// p.append(el);    line ka end
// p.insertAdjacentElement("beforeBegin",btn);
// p.insertAdjacentElement("afterEnd",btn);



// REMOVE 
// body.removeChild(btn);
// btn.remove();    directly remove




// PRACTICE
let para1=document.createElement("p");
para1.innerText="Hi I am Zumer";
document.querySelector("body").append(para1);

para1.classList.add("red");



// ...............................................................................
let h=document.createElement("h2");
h.innerText="Zumer";
document.querySelector("body").append(h);

h.classList.add("blue");





// ...............................................................................
let parent=document.createElement("div");
let c1=document.createElement("h1");
let c2=document.createElement("p");



c1.innerText="I am Zumer";
c2.innerText="Zumer";


parent.append(c1);
parent.append(c2);
parent.classList.add("box");
document.querySelector("body").append(parent);
































 




