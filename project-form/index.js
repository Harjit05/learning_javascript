
function validateEmailInput() 
  {
  const emailInput = document.getElementById('emailInput').value;
  const feedbackElement = document.getElementById('emailFeedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = ""; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }}

  function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML=error;
  }

  function validName(){
    var returnval1=true;
    var name= document.forms['myForm']['fname'].value;
    if(name.length<5){
      seterror("name", "Length of name is too short");
      returnval1=false;
    }
    return returnval1; 
}

// function validName(){
//   var returnval=true;
//   var name1= document.forms['myForm']['lname'].value;
//   if(name1.length<5){
//     seterror("name1", "Length of name is too short");
//     returnval=false;
//   }
//   return returnval; 
// }

// function validName(){
//   var returnval2=true;
//   var message1= document.forms['myForm']['mes1'].value;
//   if(message1.length>100){
//     seterror("message1", "<br>Message should less than 100 characters");
//     returnval2=false;
//   }
//   return returnval2; 
// }


  
    