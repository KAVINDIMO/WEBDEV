let cir = document.querySelectorAll(".circle")
let per = document.querySelectorAll(".percent")

console.log(cir)



let maxpercent = 80;
let speed = 100;
mx = []
per.forEach(e => {
    let max = e.innerHTML
    console.log(max)
    mx.push(max)
    console.log(mx)

});

   
    for(let i=0;i<mx.length;i++){
        per[i].textContent =  `${mx[i]}%`
        cir[i].style.background = `conic-gradient(
            orangered ${mx[i]*3.6}deg,
            white ${mx[i]*3.6}deg
        )`; 
    }



    let tog = 0;
    let nav = document.querySelector(".nav")
    let log = document.querySelector(".logo")
   
    log.onclick = ()=>{
        console.log("clicked")
        if(tog===0){
            nav.classList.add("view")
            tog++
        }
        else{
            nav.classList.remove("view")
            tog--
        }
    }




// project details

let but = document.querySelectorAll(".info")
console.log(but.length)
let title = document.querySelectorAll(".proj-title")
let tarr = []
title.forEach(e => {
    tarr.push(e.innerHTML)
});
console.log(tarr)
let morein = document.querySelector(".moreinfo")
let moret = document.querySelector("#more-title")
let close = document.querySelector(".close")


const open = ()=>{
    console.log("worked")
}
// but.forEach(e => {
//     e.addEventListener("click",open())
// });

for(let i=0;i<but.length;i++){
    
        but[i].onclick = ()=>{
            console.log(but[i])
            moret.innerHTML = tarr[i]
            morein.classList.add("view")
            cl++
        }
        close.onclick = ()=>{
            morein.classList.remove("view")
        }
   
  
   
}


//like 

let like  = document.querySelectorAll("#lb")

let tg = []
for(let i =0;i<like.length;i++){
    let temp = 0
    tg.push(temp)
}
for(let i=0;i<like.length;i++){
   
        like[i].onclick = ()=>{
            if(tg[i]===0){
                like[i].style.color = "blue"
                tg[i]++
            }
            else{
                like[i].style.color = "black"
                tg[i]--
            }
            
        }
  
   
}



