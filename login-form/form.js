const form=document.getElementById("form");
const firstNameInput=document.getElementById("firstname-input");
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const repeatPasswordInput=document.getElementById("password-repeat");
const errorMessage=document.getElementById("error-message");

form.addEventListener("submit",(e)=>{
  let errors=[];

  if(firstNameInput)
  {
    errors = getSignupFormErrors(firstNameInput.value,emailInput.value,passwordInput.value,repeatPasswordInput.value);
  }
  else
  {
    errors = getLoginFormErrors(email.value,password.value);
  }

  if(errors.length>0)
  {
      e.preventDefault();
      errorMessage.innerText=errors.join(". ")
  }
});

function getSignupFormErrors(firstName,email,password,repeatPassword){
let errors=[];

  if(firstName==='' || firstName===null)
  {
    errors.push("First name is required");
    firstNameInput.parentElement.classList.add("incorrect");
  }

  if(email==='' || email===null)
  {
    errors.push("email is required");
    emailInput.parentElement.classList.add("incorrect");
  }

  if(password==='' || password===null)
  {
    errors.push("password is required");
    passwordInput.parentElement.classList.add("incorrect");
  }

  if(password!==repeatPassword)
  {
    errors.push("Password not matched");
    passwordInput.parentElement.classList.add("incorrect");
    repeatPassword.parentElement.classList.add("incorrect");
  }
  return errors;
}

const allInputs=[firstNameInput,emailInput,passwordInput,repeatPasswordInput];

allInputs.forEach((input)=>{
  input.addEventListener("input",()=>{
    if(input.parentElement.classList.contains("incorrect"))
    {
      input.parentElement.classList.remove("incorrect");
      errorMessage.innerText='';
    }
  })
})

