const enddate="19 Nov 2022 22:00 PM"

document.getElementById("end-date").innerText = enddate
const input =document.querySelectorAll("input")

function clock(){
     const end =new Date(enddate)
     const now = new Date()
     const diff = (end - now)/1000;
     if(diff<0) return;
     // console.log(diff);
     input[0].value=Math.floor(diff/3600/24);
     input[1].value=(Math.floor (diff/3600)%24);
     input[2].value=(Math.floor(diff/60)%60);
     input[3].value=Math.floor(diff)%60;
//      convert into days

}
// initial call
clock()
setInterval(
     ()=>{
          clock()
     },1000
)

/* 
* 1 day =24 hrs

* 1 hr =60 min
*60 min =3600 sec


*/