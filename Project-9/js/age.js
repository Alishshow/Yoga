// <input id = "age" value= "30">
let age = document.getElementById('age'),   
    surname = 'Пётр',
    name = 'Петров';

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age, surname, name);