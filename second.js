const header=document.getElementById("id1");

let f=0;

header.addEventListener("click",()=>{
 if(f===0)
 {
  f=1;
 }
 else if(f===1)
 {
  f=0;
 }

  if(f===1)
  {
    header.textContent="This is after click";
    header.classList.add("after")
  }
  else
  {
    header.textContent="This is before click";
    header.classList.remove("after")
  }
});
