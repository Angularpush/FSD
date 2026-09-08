function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hi!!");
            resolve();
        },4000);
    })

}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("ABES");
            resolve();
        },1000);
    })
}

async function test() {
    try{
        await f2();
        await f1();
    }
    catch(err){
        console.log("Error",err);
    }
}
test();