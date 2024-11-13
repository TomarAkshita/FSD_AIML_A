function register(cb){
    setTimeout(()=>{
        console.log("Register End");
        cb();
    },3000);
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("Email send");
        cb();
    },4000);
    
}
function login(cb){
    setTimeout(()=>{
        console.log("Login End");
        cb();
    },5000);
    
}
function getdata(cb){
    setTimeout(()=>{
        console.log("Got User Data");
        cb();
    },6000);
    
}
function display(){
    setTimeout(()=>{
        console.log("Display user Data");
    },7000);
    
}

// callback hell
register(function (){
    sendemail(function(){
        login(function(){
            getdata(function(){
                display();
            });
        });
    });
});
