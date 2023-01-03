function getUsers(){
    return[
        {username:'John',email:'john@gmail.com'},
        {username:'Julie',email:'jublie@gmail.com'}
    ];
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('John'));