try{
  function validatesignup(){
let firstname = document.forms.signup.fName.value;
let lastname = document.forms.signup.lName.value;
let ce = document.forms.signup.cEmail.value;
let email = document.forms.signup.email.value;
let password = document.forms.signup.pass.value;
let cpass = document.forms.signup.cpass.value;

if(!email){
  document.getElementById('emailErr').innerHTML = "email is required";
  document.forms.signup.email.focus();
  return false;
}
else{
  document.getElementById('emailErr').innerHTML="";
}

if(!password){
  document.getElementById('passErr').innerHTML = "password is required";
  document.forms.signup.pass.focus();
  return false;
}
else{
  document.getElementById('passErr').innerHTML="";
}

if(!firstname){
  document.getElementById('firstnameErr').innerHTML = "firstname is required";
  document.forms.signup.fName.focus();
  return false;
}
else {
  document.getElementById('firstnameErr').innerHTML="";
}
if(!lastname){
  document.getElementById('lastnameErr').innerHTML = "lastname is required";
  document.forms.signup.lName.focus();
  return false;
}
else{
  document.getElementById('lastnameErr').innerHTML="";
}

if(!ce){
  document.getElementById('cEmailErr').innerHTML = "you must confirm your email";
  document.forms.signup.lName.focus();
  return false;
}
else{
  document.getElementById('cEmailErr').innerHTML="";
}

if(!cpass){
  document.getElementById('cpassErr').innerHTML = "you must confirm your password";
  document.forms.signup.cpass.focus();
  return false;
}
else{
  document.getElementById('cpassErr').innerHTML="";
}




  }
  function validatefirstname(){
  let namepattern = /^[A-Za-z\s]+$/;
  let firstname = document.forms.signup.fName.value;
  if(firstname){
   let x = namepattern.test(firstname);
   if(x==false){
     document.getElementById('firstnameErr').innerHTML="This sould only contain letters and whitespaces";
     document.forms.signup.fName.focus();
   }
  else{
    document.getElementById('firstnameErr').innerHTML="";
  }
  }
  }



  function validatelastname(){
  let namepattern = /^[A-Za-z\s]+$/;
  let lastname = document.forms.signup.lName.value;
  if(lastname){
   let x = namepattern.test(lastname);
   if(x==false){
     document.getElementById('lastnameErr').innerHTML="This sould only contain letters and whitespaces";
     document.forms.signup.lName.focus();
   }
  else{
    document.getElementById('lastnameErr').innerHTML="";
  }
  }
  }

  


}

catch(err){
  window.alert(err.message);
}
