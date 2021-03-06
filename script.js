function compute() {
  let principal = document.getElementById("principal").value;
  if (principal<=0){
    document.getElementById("result").innerHTML = "Please enter a valid amount.";
    return;
  }
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let interest = (parseInt(principal) * parseFloat(rate) * parseInt(years))/100;
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let maturityYear = parseInt(years) + parseInt(year);
  let maturityValue = parseInt(interest) + parseInt(principal);
  let output = "If you deposit <mark>" 
        + principal + "</mark>,<br>at an interest rate of <mark>" 
        + rate +"%</mark>.<br>You will receive an amount of <mark>" 
        + maturityValue + "</mark>,<br> in the year <mark>" 
        + maturityYear + "</mark><br>";
  document.getElementById("result").innerHTML = output;
}

function displayRate(){
  let rate = document.getElementById("rate").value;
  rate += "%";
  document.getElementById("displayRate").innerHTML = rate;
}