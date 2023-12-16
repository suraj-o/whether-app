const temp=document.querySelector(".weather1");
const date=document.querySelector(".weather2 span")
const emoji=document.querySelector(".weather3 img")
const condition=document.querySelector(".weather3 span")
const search=document.querySelector(".saerchbar")
const name=document.querySelector(".name")
const form=document.querySelector("form")
let target ="delhi"


const fetchData=async(target)=>{
try {
    const url = `https://api.weatherapi.com/v1/current.json?key=f8e0fa76c5fc4c7e8ab112929230608&q=${target}`
    const response=await fetch(url);
    const data = await response.json();
    const {current:{temp_c, condition:{
       icon,text
    }},
    location:{name,localtime}}=data
    updatedom(temp_c,name,icon,text,localtime)
} catch (error) {
    alert("spelling mistake")
    
}
}

function updatedom(tempc,loction,emojii,condtion,time){
    temp.innerText=tempc;
    name.innerText=loction;
    emoji.src=emojii;
    condition.innerText=condtion;
    const exectDate= time.split(" ")[0];
    const exectDay=getDayName(new Date(exectDate).getDay());
    date.innerText=`${exectDay} ${exectDate}`
}   

fetchData(target);

function getDayName(num){
    switch (num) {
        case 0:
            return "monday";
            break;
        case 1:
            return "tuesday";
            break;
        case 2:
            return "wednesday";
            break;
        case 3:
            return "thursday";
            break;
        case 4:
            return "friday";
            break;
        case 5:
            return "saturday";
            break;
        case 6:
            return "sunday";
            break;
            
        default:
            return "not exixt"
            break;
    }

}

 const searchfield =(e)=>{
    e.preventDefault();
    target=search.value;
    fetchData(target);
    search.value="";
 }
 form.addEventListener("submit",searchfield)