let user = {
    name: 'Vlad',
    age: 10,
    getUser: function(firstName, lastName = 'Dou') {
        return firstName + ' ' + lastName;
    }
}


let userData = user.getUser('Vova');

alert(userData);