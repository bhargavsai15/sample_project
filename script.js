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
  if(principle==0 ||rate==1||years==1)
  {
     alert("Enter a positive number");
  }
  document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";

}
