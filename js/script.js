var node = document.createElement('p');
var content = document.createTextNode("DOM Nodes in JavaScript");
node.appendChild(content);
node.style.color = 'green';
node.style.textAlign = 'center';
document.getElementsByTagName('body')[0].appendChild(node);
var w = null;
node.addEventListener('click', function () {
  w = window.open('http://genk.vn','Window Child','width=400px,height=400px')
  return false;
})

/*
getElement: id, tag, css all
Event: 3c (addEventListener)
DOM Node: add, insert, remove
BOM: window, screen, window.location, history,
  navigator, popup, timing, cookies
------------------------------------------------
  1. AngularJS - Single Page Application
  2. NodeJS - Realtime Application
  3. Sencha Touch - Mobile Application
  4. ExtJS - Web Manager Application
  5. jQuery
  6. Electron

*/
