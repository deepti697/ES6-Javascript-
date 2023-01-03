function getUsers(callback){
    
    setTimeout( () => { 
      callback( [
        {username:'John',email:'john@gmail.com'},
        {username:'Julie',email:'jublie@gmail.com'}
    ]);
},1000);
}

function findUser(username,callback){
    getUsers((users) => {
        const user = users.find( (user) => user.username ===username);
        callback(user);
    });
    
}

findUser('John',console.log)

//callback hell problem ==>promises