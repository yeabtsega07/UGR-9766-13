const btn = document.getElementById("submit");
function validate(){
  let fname=document.getElementById("Fname");
  let lname=document.getElementById("Lname");
  let card=document.getElementById("cc-number");
  let sc=document.getElementById("cc-csc");
  let exp=document.getElementById("cc-exp");
  let cardName=document.getElementById("cc-name");
  let email=document.getElementById("email");
  let message=document.getElementById("subject");
  let amount = document.getElementById("amount");
  let cname = document.getElementById("company-name");

  let flag = true;


  if (fname.value.length <3){
      error_message.innerHTML="Enter a valid name!"
      flag = false;
      return;
  }
  if (lname.value.length <3){
      error_message.innerHTML="Enter a valid name!"
      flag = false;
      return;
  }

  if (amount.value.indexOf("0") == 0){
      error_message.innerHTML="Enter a valid amount!"
      flag = false;
      return;

  }
  if (!card.value){
      error_message.innerHTML="Enter a valid Card Number!"
      flag = false;
      return;
  }
  if (!sc.value){
    error_message.innerHTML="Enter a valid Service Number!"
    flag = false;
    return;
}
if (!exp.value || exp.value.indexOf("/") == -1){
    error_message.innerHTML="Enter a valid Expiration Date!"
    flag = false;
    return;
}
if (cardName.value.length <3){
    error_message.innerHTML="Enter a valid Card Name!"
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

  alert("Donated successfully!");
  error_message.style.background="green";
  error_message.style.color="white";
  error_message.innerHTML="We have recived your donation Thank you!";
  
  function reset(){
  fname.value="";
  lname.value="";
  email.value="";
  message.value="";
  card.value="";
  sc.value="";
  exp.value="";
  cardName.value="";
  amount.value="";
  cname.value="";
  error_message.innerHTML="";
  error_message.style.background="rgba(25, 89, 89, 0.437)";
  }
  if (flag) {
    setTimeout( reset, 1000);
  }
    
  
  
  
}




