function createUsername(username) {
    this.username = username
}

function createId(username, email, password) {
    createUsername.call(this, username)
    this.email = email
    this.password = password
}
const check = new createId("basharat", "bash@gmail.com", 1234 )
console.log(check)