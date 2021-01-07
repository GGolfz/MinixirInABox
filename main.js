const speed = 20;
window.addEventListener("keydown",(e)=>{
    let character = document.getElementById("mini-circle");

    switch(e.key){
        case "ArrowUp":
            if(character.style.top == "" ){
                character.style.top = '235px';
            } else {
                let cur = character.style.top.split('px')[0];
                if(parseInt(cur) + speed >= speed *2){
                    character.style.top = (parseInt(cur)-speed)+'px';
                }
            }
            
            break;
        case "ArrowDown":
            if(character.style.top == "" ){
                character.style.top = '235px';
            } else {
                let cur = character.style.top.split('px')[0];
                if(parseInt(cur) + speed <= 500 - speed*2){
                    character.style.top = (parseInt(cur)+speed)+'px';
                }
            }
            break;
        case "ArrowRight":
            if(character.style.right == "" ){
                character.style.right = '235px';
            } else {
                let cur = character.style.right.split('px')[0];

                if(parseInt(cur) - speed >= speed / 2){
                character.style.right = (parseInt(cur)-speed)+'px';
                }
            }
            break;
        case "ArrowLeft":
            if(character.style.right == "" ){
                character.style.right = '235px';
            } else {
                let cur = character.style.right.split('px')[0];
                if(parseInt(cur) + speed <= 500-speed*2){
                    character.style.right = (parseInt(cur)+speed)+'px';
                }
            }
            break;
        default:
            console.log(e.key);
    }
})