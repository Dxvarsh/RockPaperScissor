var toggelMenu = 1; 
var attempt = 15;
var userScore = 0
var compScore = 0

document.querySelector("#menu").addEventListener("click", function(){
    if(toggelMenu === 1){
        document.querySelector("#dashboard").style.display = 'block'
        document.querySelector("#dashboard").style.left = '0%'
        toggelMenu = 0;
    }else{
        document.querySelector("#menu").addEventListener("click", function(){
document.querySelector("#dashboard").style.display = 'block'
        document.querySelector("#dashboard").style.left = '-100%'
        toggelMenu = 1;
});

document.querySelector("#dashboard").style.display = 'block'
        document.querySelector("#dashboard").style.left = '-100%'
        toggelMenu = 1;
    }
});

function compChoice(){
    var option = ["rock", "paper", "scissor"];
    var rn = Math.floor(Math.random()*3);
    // console.log(option[rn]);
    return option[rn];
}

var i = 0;
const playGame = (userChoice) => {
    
    const compCho = compChoice();
                                                // console.log("user: "+userChoice);
                                                // console.log("comp: "+ compCho);
    if(compCho === "rock"){
                                                // console.log("chala ja")
        document.querySelector('#disp').style.backgroundImage = "URL('./assets/rock-LIWzY0np.png')";
    }else if(compCho === "paper"){
        document.querySelector('#disp').style.backgroundImage = "URL('./assets/paper1-4tzoKaRw.png')";
    }else{
        document.querySelector('#disp').style.backgroundImage = "URL('./assets/scissor-OySzJqeV.png')";
    }
    
    if(compCho === userChoice){
        // document.querySelector("#draw").style.backgroundColor = "red";
        document.querySelector("#draw").style.transform = "scale(1."+ i +")";
        setTimeout(function(){
            document.querySelector("#draw").style.transform = "scale(0."+ i +")";
        }, 1000)
    }
    else if(compCho === "rock"){
        if(userChoice === "paper"){
            document.querySelector("#win").style.transform = "scale(1."+ i +")";
            userScore += 5;  //user ka score badhega;
            setTimeout(function(){
                document.querySelector("#win").style.transform = "scale(0."+ i +")";
            }, 1000)
        }
        else{
            document.querySelector("#lose").style.transform = "scale(1."+ i +")";
            compScore += 5; //computer ka score badhega;
            setTimeout(function(){
                document.querySelector("#lose").style.transform = "scale(0."+ i +")";
            }, 1000)
        }
    }
    else if(compCho === "paper"){
        if(userChoice === "scissor"){
            document.querySelector("#win").style.transform = "scale(1."+ i +")";
            userScore += 5;
            setTimeout(function(){
                document.querySelector("#win").style.transform = "scale(0."+ i +")";
            }, 1000)
        }
        else{
            document.querySelector("#lose").style.transform = "scale(1."+ i +")";
            compScore += 5;
            setTimeout(function(){
                document.querySelector("#lose").style.transform = "scale(0."+ i +")";
            }, 1000)
        }
    }
    else if(compCho === "scissor"){
        if(userChoice === "rock"){
            document.querySelector("#win").style.transform = "scale(1."+ i +")";
            userScore += 5;
            setTimeout(function(){
                document.querySelector("#win").style.transform = "scale(0."+ i +")";
            }, 1000)
        }
        else{
            document.querySelector("#lose").style.transform = "scale(1."+ i +")";
            compScore += 5;
            setTimeout(function(){
                document.querySelector("#lose").style.transform = "scale(0."+ i +")";
            }, 1000)
        }
    }

    document.querySelector("#cScore").textContent = compScore;
    document.querySelector("#yScore").textContent = userScore;
}

document.querySelector('#btns').addEventListener("click", (dets)=>{
    attempt--;
    if(attempt <= 0){
        document.querySelector("#over").style.transform = "scale(1."+ i +")";
        setTimeout(function(){
            document.querySelector("#over").style.transform = "scale(0."+ i +")";
        }, 3000)
    }
    else{
        var choice = dets.target.id; 
        // console.log(choice);
        if(choice === "rock"){
            // console.log("chala ja")
            document.querySelector('#dev').style.backgroundImage = "URL('./assets/rock-LIWzY0np.png')";
        }else if(choice === "paper"){
            document.querySelector('#dev').style.backgroundImage = "URL('./assets/paper1-4tzoKaRw.png')";
        }else{
            document.querySelector('#dev').style.backgroundImage = "URL('./assets/scissor-OySzJqeV.png')";
        }
        
        playGame(choice);
    }
})

function playerName(pName){
    document.querySelector("#username").textContent = pName.toUpperCase();
    document.querySelector("#gamer").textContent = pName.toUpperCase();
    document.querySelector("#info").style.top = "-100%"
}
