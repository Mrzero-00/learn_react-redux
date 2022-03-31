
const gogo = ()=>{
    console.log("h1");
    const pre = new Date();
    for(let i =0;i<1000000000;i++){
    }   
    const end = new Date();
    console.log(end-pre,"ms");
}

async function printText(){
    console.log("작업 시작");
    await gogo();
    console.log("작업끝");

}


printText();

