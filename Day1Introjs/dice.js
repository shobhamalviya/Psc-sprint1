function fun(){
    var dice1=document.querySelector("#member1");
    dice1.innerHTML=Math.floor(Math.random()*6)+1;
    var dice2=document.querySelector("#member2");
    dice2.innerHTML=Math.floor(Math.random()*6)+1;
    var dice3=document.querySelector("#member3");
    dice3.innerHTML=Math.floor(Math.random()*6)+1;
    var dice4=document.querySelector("#name");
    if(dice1.innerHTML>dice2.innerHTML && dice1.innerHTML>dice3.innerHTML){
        dice4.innerHTML="Member A";
        dice1.style.background="green";
    }
    else if(dice1.innerHTML<dice2.innerHTML && dice1.innerHTML<dice3.innerHTML){
        dice1.style.background="red";
    }
    else if(dice1.innerHTML===dice2.innerHTML && dice1.innerHTML===dice3.innerHTML){
        dice1.style.background="blue";
        dice4.innerHTML="Equal"
    }
    else{
        dice1.style.background="yellow";
    }
    if(dice2.innerHTML>dice1.innerHTML&&dice2.innerHTML>dice3.innerHTML){
        dice4.innerHTML="Member B";
        dice2.style.background="green";
    }
    else if(dice2.innerHTML<dice1.innerHTML && dice2.innerHTML<dice3.innerHTML){
        dice2.style.background="red";
    }
    else if(dice2.innerHTML==dice1.innerHTML && dice2.innerHTML==dice3.innerHTML){
        dice2.style.background="blue";
        dice4.innerHTML="Equal";
    }
    else{
        dice2.style.background="yellow";
    }
    
    if(dice3.innerHTML>dice1.innerHTML && dice3.innerHTML>dice2.innerHTML){
        dice4.innerHTML="Member C";
        dice3.style.background="green";
    }
    else if(dice3.innerHTML<dice1.innerHTML && dice3.innerHTML<dice2.innerHTML){
        dice3.style.background="red";
    }
    else if(dice3.innerHTML==dice1.innerHTML && dice3.innerHTML==dice2.innerHTML){
        dice3.style.background="blue";
        dice4.innerHTML="Equal";
    }
    else{
        dice3.style.background="yellow";
    }
    }