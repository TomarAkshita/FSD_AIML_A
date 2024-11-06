// ?used for asynchronous programming
// pending reject resolve

/* const myprom1=new Promise((resolve,reject)=>{
    console.log("execute promise")
    // resolve("success");
    reject("Network error");
});
*/

/* myprom1.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Executed finally block");
});
*/

// https://api.github.com/users/TomarAkshita

// Promise used to fetch API
const data=fetch("https://api.github.com/users/TomarAkshita");
data.then((val)=>{
    return val.json();
}).then((res)=>{
    console.log(res);
})