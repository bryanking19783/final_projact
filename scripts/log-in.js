try{
  function validatelogin(){
    let email = document.forms.login.email.value;
    let password = document.forms.login.pass.value;


  if(!email){
    document.getElementById('emailErr').innerHTML = "email is required";
    document.forms.login.email.focus();
    return false;
  }
  else{
    document.getElementById('emailErr').innerHTML="";
  }

  if(!password){
    document.getElementById('passErr').innerHTML = "password is required";
    document.forms.login.pass.focus();
    return false;
  }
  else{
    document.getElementById('passErr').innerHTML="";
  }
}
}

catch(err){
  window.alert(err.message);
}
