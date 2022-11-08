let sum = 0
let c=[]
isAlive = false
isBlackjack = false
let player = {
    name : "Player",
    cash : 200
}
function getRandom(){
    let x = (Math.floor(Math.random()*13)) + 1
    if ( x == 11 || x == 12 || x == 13 ){
        x=10
        return x
    }
    else if(x == 1){
        x = 11
        return x
    }
    else{
        return x
    }
   
}
function start(){
    firstnum = getRandom()
    secondnum = getRandom()
    sum = firstnum + secondnum
    c = [ firstnum , secondnum ]
    isAlive = true
    render()

}
function render(){ 
    if( sum < 21){
        document.getElementById("text").innerText = ' Do you want to draw a new card. '
    }
    else if( sum == 21){
        document.getElementById("text").innerText = ' You got a Blackjack!!!'
        isBlackjack = true
    }
    else {
        document.getElementById("text").innerText = ' You are out of the Game. '
        isAlive = false
    }
    document.getElementById("sum").innerText = "Sum : " + sum
    document.getElementById("cards").innerText = "Cards : "
    for (let i = 0 ; i < c.length ; i++){
        document.getElementById("cards").textContent +=  c[i] + "  "
    }
    if(isBlackjack == true){
        player.cash +=100
        isBlackjack = false
        document.getElementById("player").textContent = player.name + " :  $" + player.cash
    }
    if(isAlive == false){
        player.cash -=20
        document.getElementById("player").textContent = player.name + " :  $" + player.cash
    }

    
}
function newcard(){
    if( isAlive == true && isBlackjack == false){
       let newnum =getRandom()
       c.push(newnum)
       sum = sum + newnum
       render() 
    }
    else{
        alert("Cannot draw a new card")
        isBlackjack = false
        document.getElementById("text").textContent = "Want to play a round?"
        document.getElementById("sum").innerText = "Sum : "
        document.getElementById("cards").innerText = "Cards : "

        
    }
}