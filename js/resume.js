var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}


var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
if(!idb in window)
{
console.log("indexedDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("indexedDB is created");
open.onupgradeneeded=function (e) {
 request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(error){
console.log("error is occured");
}
open.onsuccess=function(e){
request=e.target.result;
var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data);
  personalinfo(data.target.result);
  career(data.target.result);
}
}
var left=document.querySelector(".left");
function personalinfo(pi) {
  var image=document.createElement("img");
  image.src="images/usericon.svg";
  image.alt=pi.name;
  left.append(image);
  var hh=document.createElement("h2");
  hh.textContent=pi.name;
  left.append(hh);
  var ha=document.createElement("h2");
  ha.textContent=pi.phonenumber;
  left.append(ha);
  var hb=document.createElement("h2");
  hb.textContent=pi.email;
  left.append(hb);
  var hc=document.createElement("h2");
  hc.textContent=pi.address;
  left.append(hc);
}
var right=document.querySelector(".right");
function career(c) {
  var ca=document.createElement("h1");
  ca.textContent="Career Objective";
  right.append(ca);
  var ha=document.createElement("h2");
  ha.textContent=c.career;
  right.append(ha);
  var hr=document.createElement("hr");
  right.append(hr);
  var head11=document.createElement("h2");
  head11.textContent="Educational Details";
  right.append(head11);
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percentage</th></tr>"
   var tr2="";
   for(var i in c.education){
     tr2=tr2+"<tr><td>"+c.education[i].institute+"</td><td>"+c.education[i].branch+"</td><td>"+c.education[i].year+"</td><td>"+c.education[i].per+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
var hr=document.createElement("hr");
right.append(hr);
var head=document.createElement("h2");
head.textContent="Skills";
right.append(head);
var s1=document.createElement("h2");
s1.textContent=c.skills;
right.append(s1);

}
