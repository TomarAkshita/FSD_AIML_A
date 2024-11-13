function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Register End");
            resolve();
        },3000);
    });
}
function sendemail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Email send");
            resolve();
        },4000);
    }); 
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login End");
            // resolve();
            return reject("Login error");
        },5000);
    });   
}
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Got User Data");
            resolve();
        },6000);
    });  
}
function display(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Display User Data");
            resolve();
        },7000);
    });   
}

register().then(sendemail).then(login).then(getdata).then(display).catch((err)=>{
    console.log("ERROR",err);
})
console.log("Complete");
