//Initial Sample Program
console.log("First Node Program");
var http = require('http');

http.createServer(function(request,response){
  response.end("Hello World");
}).listen(3000,function(){
  console.log("Server Started ");
});

var folderName = __dirname;
var fileName = __filename;

console.log("Folder Name "+folderName+" File Name : "+fileName);

//function Expressions

var sampleFunction = function(){
  console.log("Sample Function to test Function Expressions");
}

function callFunction(func){
  func();
}


console.log("Before Function Expressions");
callFunction(sampleFunction);
console.log("After Function Expressions");

var fs = require('fs');


var test = fs.readFile(folderName+"/test.txt", function(error, content){
  if(error){
    return console.error(error);
  }else {
    console.log(content.toString());
  }
});

var data = fs.readFileSync(folderName+"/Sample.txt");
function dataText(){
  console.log(data.toString());
}

dataText();
