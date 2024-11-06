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

async function authentication(){
    try{
        await register();
        await sendemail();
        await login();
        await getdata();
        await display();
    }
    catch(err){
        console.log("ERROR",err);
    }
}
authentication();
console.log("Complete");
