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
        let thrs=hour;
        if(hour>12)
        thrs=hour%12
        document.querySelector('.b1').innerHTML=`${thrs}\n hours`
        document.querySelector('.b2').innerHTML=`${min}\n min`
        document.querySelector('.b3').innerHTML=`${sec}\n secs`
        document.querySelector('.b4').innerHTML=`${ampm}`
          if(hour>=12&& hour<=15){
        document.querySelector('.grab').innerHTML="LUNCH HOUR IS THE BEST HOUR OF THE DAY"
        }
        else if(hour>=16&&hour<=18){
             document.querySelector('.grab').innerHTML="STOP YAWNING GET SOME TEA ITS JUST EVENING"
        }
        else if(hour>=20&&hour<=23){
            document.querySelector('.grab').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
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
let temp=document.querySelector('.image1');
function changetext(){
    document.querySelector('.setalarm').innerHTML="Part time!!"
}
function change(){
    document.querySelector('.setalarm').innerHTML="Set Alarm"
}
function checkalarm(){
    let time1=new Date()
    let hrs=time1.getHours()
    document.getElementsByTagName('li')[0].innerHTML=`Wake Up Time : ${parseInt(morningtime.value)%12}AM - ${parseInt(morningtime.value)%12+1}AM`
    document.getElementsByTagName('li')[1].innerHTML=`Lunch Time : ${parseInt(lunchtime.value)%12}PM - ${parseInt(lunchtime.value)%12+1}PM`
    document.getElementsByTagName('li')[2].innerHTML=`Nap Time : ${parseInt(eveningtime.value)%12}PM - ${parseInt(eveningtime.value)%12+1}PM`
    document.getElementsByTagName('li')[3].innerHTML=`Night Time : ${parseInt(naptime.value)%12}PM - ${parseInt(naptime.value)%12+1}PM`

    if(parseInt(morningtime.value)===hrs){
        document.querySelector('.g_morning').innerHTML="good morning"
        temp.setAttribute('class','image1');
    }
    else if(parseInt(lunchtime.value)===hrs){
        document.querySelector('.g_morning').innerHTML="Good Afternoon!! Take Some Sleep"
        temp.setAttribute('class','lunch_img');
    }
    else if(parseInt(eveningtime.value)===hrs){
        document.querySelector('.g_morning').innerHTML="Good Evening!!"
        temp.setAttribute('class','nap_img');
    }
    else if(parseInt(naptime.value)===hrs){
         document.querySelector('.g_morning').innerHTML="good night"
         temp.setAttribute('class','night_img');
    }
}
