let success= true;

function getUsers(){
    return new Promise( (resolve,reject) =>{
        setTimeout( () =>{
            if(success){
            resolve([
                {username:'John', email:'john@gmail.com'},
                {username:'Julie', email:'julie@gmail.com'}
            ])
        }else{
            reject('Falied to list users')
        }
        },1000)
    });
}

getUsers().then( (users) => {
    console.log(users);
}).catch((err) => {
    console.log(err);
});
    