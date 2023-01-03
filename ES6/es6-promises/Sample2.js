function getUsers(){
    let users =[];
    setTimeout(() => { 
      users = [
        {username:'John',email:'john@gmail.com'},
        {username:'Julie',email:'jublie@gmail.com'}
    ]
},1000);
return users;
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('John'));