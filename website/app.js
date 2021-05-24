/* Global Variables */
const apiKey= "d74840f16a22956b3f94dbdc7ab45157"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = +d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

const generate = document.querySelector("#generate")

generate.addEventListener("click", async()  =>{
    const myZip = document.querySelector('#zip').value;
    const content = document.querySelector('#feelings').value;
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${myZip}&appid=${apiKey}&units=metric`);
    const data = await res.json()
    const temp = data.main.temp
    console.log(data)
const object = {
    temp: temp,
    date: newDate,
    content: content
}
const updateUI = async ()=>{
  
  const newRes= await fetch('/bringData',{credentials:"same-origin"});
  const allData = await newRes.json();
  
    document.querySelector("#date").innerHTML = allData.date;
  
    document.querySelector("#temp").innerHTML = allData.temp;
  
    document.querySelector("#content").innerHTML = allData.content;
      
  }
await updateUI()
await fetch('/storeData' , {
  method: "POST",
  credentials:"same-origin",
  headers:{
 "Content-Type":"application/json"
  },
  body:JSON.stringify(object),
    
}); 

});