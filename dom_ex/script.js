const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


// Add paragraph
const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.cssText = "margin: 0; color: red;";
content.appendChild(para);

// Add h3
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style['color'] = "blue";
content.appendChild(h3);

// Add div
const subContainer = document.createElement('div');
subContainer.classList.add('sub');
subContainer.style.cssText = "border: 1 black solid; background-color: pink;";

// Add sub-h1
const subH1 = document.createElement('h1');
subH1.textContent = "I'm in a div";
subContainer.appendChild(subH1);

// Add sub-p
const subPara = document.createElement('p');
subPara.textContent = "ME TOO!";
subContainer.appendChild(subPara);


content.appendChild(subContainer);