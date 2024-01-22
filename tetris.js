const shapes =[
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
    ],
    [
        [0,0,0],
        [0,1,1],
        [1,1,0]
    ],
    [
        [0,0,0],
        [1,1,0],
        [0,1,1]
    ],
    [
        [1,0,0],
        [1,0,0],
        [1,1,0]
    ],
    [
        [0,0,1],
        [0,0,1],
        [0,1,1]
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,1,0]
    ],
    [
        [1,1],
        [1,1]
    ]
    ]
    const color = [
        "#fff",
        "#9b5fe0",
        "#16a4d8",
        "#60dbe8",
        "#8bd346",
        "#efdf48",
        "#f9a52c",
        "#d64e12"
    ]

    const row=20;
    const col = 10;
    let score=0;
    let scBoared= document.querySelector("h2");
    let canva = document.querySelector("#tetris");
    let ctx=canva.getContext("2d");
    ctx.scale(30,30);
    let grid=genetratGrid();
    
    let peiceObj = null;
 
    //set interval
    
    setInterval(newGame,500);

    //  start the game

    function newGame(){
        checkFill();
        if(peiceObj==null){
            peiceObj=randomShape();
            renderPeice();
        }
        moveDown();
    }

    //random shape

    function randomShape(){
    
    
    }

       // rendering the peice

    function renderPeice(){
          


    }


    // to check weather the boxes hit the border of canva
    
    function area(x,y,reverse){
        


    }
    
    //move the boxes
    
    function moveDown(){
    

    }

       // push to the left

    function moveLeft(){
        


    }
        
     // push to the right

    function moveRight(){
    

    }

    // rotate the shape

    function moveUp(){
        


    }
    
    
    // make a grid
    function genetratGrid(){
      


    }

    // render the grid

    function renderGrid(){
       
        
    }

    // to remove the filled row;

    function checkFill() {
        
    
    }
    
      //Adding event listener

    document.addEventListener("keydown",function(e){
      

     
    })
    