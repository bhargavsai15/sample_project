function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}

function compute()
{
  var principal=document.getElementById("principle").value;
  var rate=document.getElementById("rate").value; 
  var years = document.getElementById("years").value;
  var interest = principal * years * rate /100;
  var year = new Date().getFullYear()+parseInt(years);
  var amount=arseInt(principal);
  if(amount<=0 ||rate==1||years==1)
  {
     alert("Enter a positive number");
  }
  var elem=document.getElementById("result");
  elem.innerHTML="If you deposit "+amount+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
  elem.style.color="yellow";

}
