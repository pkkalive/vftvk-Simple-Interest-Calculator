function compute() {
  let principal = document.getElementById("principal");
  if (principal.value <= 0){
    alert("Please enter a valid amount positive number for example 1000.");
    principal.focus();
    return;
  }
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let interest = (parseInt(principal.value) * parseFloat(rate) * parseInt(years))/100;
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let maturityYear = parseInt(years) + parseInt(year);
  let maturityValue = parseInt(interest) + parseInt(principal.value);
  let output = "If you deposit <mark>" 
        + principal.value + "</mark>,<br>at an interest rate of <mark>" 
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