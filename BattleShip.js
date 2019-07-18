function setup(){
    createCanvas(1000,1000);
    background(7, 71, 27)
}

let start = 0;
let end = 1000;
let fir = 100;

function draw(){
    fill(255,255,255)
    for(let i = 0; i< 100; i++){
    line(fir,start,fir,end);
    line(start,fir,end,fir)
    fir = fir + 100;
    }
}
let array =[
            [0,0,0,0,0,0,0,0,0,1],
            [0,0,1,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,1,1,0,0,0,0,0,0,1],
        ];

function mouseClicked(){
     let x = mouseX
     let y = mouseY
     let clickX = x/100
     let clickY = y/100
     clickX = Math.floor(clickX)
     clickY = Math.floor(clickY)
     if(array[clickX][clickY]==1){
         console.log("You have hit me")
     }else{
    console.log("You have missed")     
     }
}
