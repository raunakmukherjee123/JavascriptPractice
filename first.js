let a=[1,2.0,"Rahul"];

for(let i in a)
{
  console.log(i);
}

let multiply=(a,b)=>{
  return a*b;
}
console.log(multiply(3,5));

function checkVowel(ch)
{
  if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u')
  {
    return true;
  }
  return false;
}

const arr=['b','a','r','o'];

const vowels=arr.filter((ch)=>checkVowel(ch));

console.log(vowels);

const arr1=[1,5,8,3,10];
const largest=arr1.reduce((prev,curr)=>{
  return prev>curr?prev:curr;
});

const smallest=arr1.reduce((prev,curr)=>{
  return prev<curr?prev:curr;
});

console.log("largest number is ",largest);
console.log("smallest number is ",smallest);

arr.forEach((val)=>{
  console.log(val);
})

