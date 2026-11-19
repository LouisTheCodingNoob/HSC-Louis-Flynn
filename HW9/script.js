// adding and removing elements

var list = document.getElementsByTagName('ul')[1];
var newListItem = document.createElement('li');
var newText = document.createTextNode('Create Video Games');
newListItem.appendChild(newText);
list.appendChild(newListItem);
list.removeChild(newListItem);

// attribute nodes

var header = document.querySelector('h2');
if (header.hasAttribute('class')) {
    var attribute = header.getAttribute('class');
    header.className = 'header-color-red';
}