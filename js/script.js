"use strict";
function Person(){
    this.name = "";
    this.email = "";
    this.address = "";
    this.showInfo = function(){
        document.write("Tên là: " + this.name + "<br/>");
        document.write("Email là: " + this.email + "<br/>");
        document.write("Địa chỉ là: " + this.address + "<br/>");
    };
    return this;
};
Person.prototype.gender = "";
Person.prototype.showGender = function() {
  document.write("Giới tính là: " + this.gender + "<br/>")
};
//-----------------------------
var cuong = new Person();
cuong.name = "Nguyễn Văn Cường";
cuong.email = "thehalfheart@gmail.com";
cuong.address = "Buôn Ma Thuột ĐăkLăk";
cuong.gender = "Nam";
cuong.showInfo();
cuong.showGender();

var pattern = /freetuts/igm;
var s = /JavaScript/;
var t = s.test("Welcome to JavaScript word!");
document.getElementById('result').innerHTML = t;
function showTextVal(){
    var value = document.getElementById('id-textbox').value;
    alert(value);
}

/*
  /pattern/modifiers
  i: so khop (ko quan tam chu hoa hay thuong)
  g: toan bo chuoi
  m: ca du lieu xuong dong
*/

// var node = document.createElement('p');
// var content = document.createTextNode("DOM Nodes in JavaScript");
// node.appendChild(content);
// node.style.color = 'green';
// node.style.textAlign = 'center';
// document.getElementsByTagName('body')[0].appendChild(node);
// var w = null;
// node.addEventListener('click', function () {
//   w = window.open('http://genk.vn','Window Child','width=400px,height=400px')
//   return false;
// })

/*
getElement: id, tag, css all
Event: 3c (addEventListener)
DOM Node: add, insert, remove
BOM: WINDOWS, COOKIES, screen, LOCATION, history,
  navigator, popup, timing.
------------------------------------------------
  1. AngularJS - Single Page Application
  2. NodeJS - Realtime Application
  3. Sencha Touch - Mobile Application
  4. ExtJS - Web Manager Application
  5. jQuery
  6. Electron

*/
// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires="+d.toUTCString();
//   document.cookie = cname + "=" + cvalue + "; " + expires;
// }
// function getCookie(cname) {
//   var name = cname + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0; i<ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0)==' ') c = c.substring(1);
//     if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
//   }
//   return "";
// }
