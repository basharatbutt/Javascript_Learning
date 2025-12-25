let person = {
    firstName:"Tariq",
    lastName:"javed",
    age:"23"
}

person.name = function() {
    return this.firstName + " " + this.lastName + " is a good man"
}
document.getElementById("demo").innerHTML  = person.name()