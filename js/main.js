function submitdata() {
  var career=document .querySelector("#career").value;
  var name=document .querySelector("#name").value;
  var phonenumber=document .querySelector("#phonenumber").value;
  var email=document .querySelector("#email").value;
  var address=document .querySelector("#address").value;
  var ginstitute =document .querySelector("#ginstitute").value;
  var gBRANCH =document .querySelector("#gBRANCH").value;
  var gyear =document .querySelector("#gyear").value;
  var gpercentage =document .querySelector("#gpercentage").value;
  var iinstitute =document.querySelector("#iinstitute").value;
  var ibranch  =document.querySelector("#ibranch").value;
  var iyear =document.querySelector("#iyear").value;
  var ipercentage =document.querySelector("#ipercentage").value;
  var sinstitute =document.querySelector("#sinstitute").value;
  var sbranch =document.querySelector("#sbranch").value;
  var syear =document.querySelector("#syear").value;
  var spercentage =document.querySelector("#spercentage").value;
  var skills =document.querySelector("#skills").value;
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
  store.put({
    career:career,
    name:name,
    phonenumber:phonenumber,
    email:email,
    address:address,
    education:[
      {
      institute:ginstitute,
      branch:gBRANCH,
      year:gyear,
      per:gpercentage
    },
    {
      institute:iinstitute,
      branch:ibranch,
      year:iyear,
      per:ipercentage
    },
    {
      institute:sinstitute,
      branch:sbranch,
      year:syear,
      per:spercentage
    }],

      skills: skills
    
    }
    );
}




window.open("index.html");




}
