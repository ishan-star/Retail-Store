const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.enter-create');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click',function()
{
      modal.style.display = 'block';
});
closeBtn.addEventListener('click',() =>{
      modal.style.display = 'none';
});
window.addEventListener('click',function(e){
 if(e.target === modal)
 {
    modal.style.display = 'none';
 }
});

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password= document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

function showError(input,message){
 const formValidation = input.parentElement;
 formValidation.className = 'form-validation error';
 const errorMessage = formValidation.querySelector('p');
 errorMessage.innerText = message;
}
function showValid(input){
 const formValidation = input.parentElement;
 formValidation.className = 'form-validation valid';
}

function checkRequired(inputArr){
  
     inputArr.forEach(function(input){
       if(input.value.trim() === ''){
        showError(input,'{getfieldName(input)} is required'  );
       }else{
        showValid(input);
       }  

     });
}
function checkLength(input,min,max){
  
 if(input.value.length < min){
   showError(input,'Error');
 }else if(input.value.length >max) {
  showError(input,`${getFieldName(input)} must be less than ${max} characters`);
 }else{
  showValid(input);

 }
}
function passwordMatch(input1,input2){
  if(input1.value !== input2.value)
  {
    showError(input2,'passwords do not match');
  }
}
function getFieldName(input){
 return input.name.charAt(0).toUppercase() + input.name.slice(1); 
}


form.addEventListener('submit', function(e){
 e.preventDefault();
 checkRequired([name,email,password,passwordConfirm]);
 checkLength(name,3,30);
 checkLength(password,8,25);
 checkLength(passwordConfirm,8,25);
 passwordMatch(password,passwordConfirm);


});