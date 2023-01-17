const btn = document.getElementById("submit");
function validate(){
  let name=document.getElementById("name");
  let email=document.getElementById("email");
  let message=document.getElementById("subject");
  let flag = true;


  if (name.value.length <3){
      error_message.innerHTML="Enter a valid name!"
      flag = false;
      return;
  }

  if (email.value.indexOf("@")==-1 || email.value.length<7 || !email.value.includes(".com")){
      error_message.innerHTML="Enter a valid email!"
      flag = false;

      return;
  }

  if (message.value.length < 10){
      error_message.innerHTML="Enter a thoughtfull message!"
      flag = false;

      return;
  }
  alert("Form submitted successfully!");
  error_message.style.background="green";
  error_message.style.color="white";
  error_message.innerHTML="We have recived your contact form!";
  
  function reset(){
  name.value="";
  email.value="";
  message.value="";
  error_message.innerHTML="";
  error_message.style.background="rgba(25, 89, 89, 0.437)";
  }
  if (flag) {
    setTimeout( reset, 1000);
  }
    
  
  
  
}




