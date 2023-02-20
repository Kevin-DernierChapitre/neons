

setInterval(randomize, 100)
function randomize(){
    console.log("test")
    let h1_el = document.querySelector('h1')
    let random_num = (Math.random)*10;
    if(random_num > 5){
        h1_el.style.textShadow = "0"
    }
    else{
        h1_el.style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6"
    }
}