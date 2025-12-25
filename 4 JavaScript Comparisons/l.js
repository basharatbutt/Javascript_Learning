function myFunction() {
    let voteable;
    let age = 
    Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Input is not a number";
    } else {
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("fr").innerHTML = voteable + " too drive "
}