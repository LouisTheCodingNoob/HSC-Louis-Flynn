var section1 = document.getElementById('s1');
console.log(section1);

var paragraphs = document.getElementsByClassName('paragraph');
console.log(paragraphs);
console.log(paragraphs[0]);

var pageBreak = '<br>';
for (var i = 0; i < paragraphs.length; i++){
	paragraphs[i].innerHTML = pageBreak + paragraphs[i].textContent;
}
	
var listItems = document.getElementsByTagName('li');
console.log(listItems);

var ulListItem = document.querySelector('ul>li');
console.log(ulListItem);
var prevItem = ulListItem.previousSibling;
var nextItem = ulListItem.nextSibling.nextSibling;
console.log(prevItem);
console.log(nextItem);

var list = document.getElementsByTagName('ul')[0];
console.log(list);
var firstItem = list.firstChild;
console.log(firstItem.nextSibling);
var lastItem = list.lastChild;
console.log(lastItem.previousSibling);