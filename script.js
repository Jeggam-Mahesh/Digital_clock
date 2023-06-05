let displaytime=document.querySelector('span')
//displaytime.addEventListener("click",()=>{
    function clock(){
        let time=new Date()
        let hour=time.getHours();
        let min=time.getMinutes()
        let sec=time.getSeconds()
        let ampm="AM"
        if(hour>=12){
       ampm="PM"
        }
        document.querySelector('.b1').innerHTML=`${hour%12}\n hours`
        document.querySelector('.b2').innerHTML=`${min}\n min`
        document.querySelector('.b3').innerHTML=`${sec}\n secs`
        document.querySelector('.b4').innerHTML=`${ampm}`
          if(hour>=12&& hour<=15){
        document.querySelector('.grab').innerHTML="LUNCH HOUR IS THE BEST HOUR OF THE DAY"
        let temp=document.querySelector('.image1');
       
         temp.setAttribute('class','lunch_img');
        }
        else if(hour>=16&&hour<=18){
             document.querySelector('.grab').innerHTML="STOP YAWNING GET SOME TEA ITS JUST EVENING"
             let temp=document.querySelector('.image1');
             temp.setAttribute('class','nap_img');
        }
        else if(hour>=20&&hour<=23){
            document.querySelector('.grab').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
            let temp=document.querySelector('.image1');
            temp.setAttribute('class','night_img');
        }
    //    if(hour>=12){

    //    }
    }
    setInterval(()=>{
        clock();
    },1000)
//})
let morningtime=document.getElementById("wakeup")
let lunchtime=document.getElementById("lunch")
let eveningtime=document.getElementById("nap")
let naptime=document.getElementById("night")
function checkalarm(){
    let time1=new Date()
    let hrs=time1.getHours()
    document.getElementsByTagName('li')[0].innerHTML=`Wake Up Time : ${parseInt(morningtime.value)%12}AM - ${parseInt(morningtime.value)%12+1}AM`
    document.getElementsByTagName('li')[1].innerHTML=`Lunch Time : ${parseInt(lunchtime.value)%12}PM - ${parseInt(lunchtime.value)%12+1}PM`
    document.getElementsByTagName('li')[2].innerHTML=`Nap Time : ${parseInt(eveningtime.value)%12}PM - ${parseInt(eveningtime.value)%12+1}PM`
    document.getElementsByTagName('li')[3].innerHTML=`Night Time : ${parseInt(naptime.value)%12}PM - ${parseInt(naptime.value)%12+1}PM`

    if(parseInt(morningtime.value)===hrs){
        document.querySelector('.g_morning').innerHTML="good morning"
    }
    else if(parseInt(lunchtime.value)===hrs){
        document.querySelector('.g_morning').innerHTML="Good Afternoon!! Take Some Sleep"
    }
    else if(parseInt(eveningtime.value)===hrs){
        document.querySelector('.g_morning').innerHTML="Good Evening!!"
    }
    else if(parseInt(naptime.value)===hrs){
         document.querySelector('.g_morning').innerHTML="good night"
    }
}
