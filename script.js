let b = 1
let f = ()=>{

let c = document.querySelector(".m")
if(b==1){
  c.style.display = "block"
  b = 2
}
  else{
     c.style.display = "none"
    b=1
  }
}
let g = 1
let s = ()=>{
  let ch = document.getElementById("channel")
  if(g==1){
    ch.innerText = "User Name"
    g=2
  }
  else{
    ch.innerText = "Channel Id"
    g=1
  }
}
let fun = ()=>{
  let inp1 = document.getElementById("page")
  let inp2 =  document.getElementById("page1")
  let inp3 =  document.getElementById("page2")
  let inp4 = document.getElementById("page3")
  let inp5 = document.getElementById("page4")
   let inp6 = document.getElementById("page5")
let object = {
  Page_Name: inp1.value,
  Channel_Id: inp2.value,
  Page_Access_Token:inp3.value,
  Tags : inp4.value,
  Source: inp5.value,
  Play_List_Id: inp6.value 
}
 console.log(object)
  let div = document.querySelector(".loader")
  div.style.display = "block"
  setTimeout(()=>{
     div.style.display = "none"
  },1000)
}
