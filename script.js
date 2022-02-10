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
  var amount=parseInt(principal);
  if(amount<=0 ||isNaN(amount))
  {
     alert("Enter a positive number");
    breturn;
  }
  var elem=document.getElementById("result");
  elem.innerHTML="If you deposit "+"<mark>"+amount+"</mark>"+",\<br\>at an interest rate of "+"<mark>"+rate+"</mark>"+"%\<br\>You will receive an amount of "+"<mark>"+interest+"</mark>"+",\<br\>in the year "+"<mark>"+year+"</mark>"+"\<br\>";

}
