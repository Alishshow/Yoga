// <input id = "age" value= "30">
// let age = document.getElementById('age');

function showUser() {
    alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
}
let age = {
    surname: '',
    name: '',
    value: '30'
};

showUser.call(age)
