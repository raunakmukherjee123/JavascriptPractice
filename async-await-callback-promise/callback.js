function f1(name,callback)
{
  callback(name);
}

function f2(x){
  console.log(x);
}

f1("Hello",f2);

function print(name,callback){
  setTimeout(()=>{
  console.log("printing name ",name);
  callback("hello world")
  },5000);

  console.log("After setTimeout");
}

function display(x)
{
  console.log(x);
}

function f3(){
  console.log("After callback");
}

print("Javascript",display);
f3();