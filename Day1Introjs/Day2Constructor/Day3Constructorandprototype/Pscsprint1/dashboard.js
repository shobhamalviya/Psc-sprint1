function append(){
let data=JSON.parse(localStorage.getItem("students")) || [];


   data.forEach(function(el){
    console.log(el);
   })
   let div=document.createElement("div")
}

 append();