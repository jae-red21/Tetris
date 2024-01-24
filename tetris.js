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
        let ran = Math.floor((Math.random()*7));
        let peice= shapes[ran];
        let peiceClr= ran+1;
        let x=3;
        let y=0
        return {peice,peiceClr,x,y};

    
    }

       // rendering the peice

    function renderPeice(){
        let peice=peiceObj.peice;
        for(let i=0;i<peice.length;i++){
            for(let j=0;j<peice[i].length;j++){
                if(peice[i][j]==1){
                    ctx.fillStyle=color[peiceObj.peiceClr];
                    ctx.fillRect(peiceObj.x+j,peiceObj.y+i,1,1);
                }
            }
        }



    }


    // to check weather the boxes hit the border of canvas
    
    function area(x,y,reverse){
            let peice=peiceObj.peice || reverse;
            for(let i=0;i<peice.length;i++){
               for( let j=0;j<peice[i].length;j++){
                if(peice[i][j]==1){
                    let p= x+j;
                    let q=y+i;
                    if(p>=0 && p<col && q>=0 && q<row){
                       if(grid[q][p]>0){
                         return true;
                        }
                    }else{
                        return true;
                    }
                }
               }
            }
            return false;
        }
        
    
    //move the boxes
    
    function moveDown(){
        if(!area(peiceObj.x,peiceObj.y+1)){
            peiceObj.y+=1;
            }else{
                for(let i=0;i<peiceObj.peice.length;i++){
                    for( let j=0;j<peiceObj.peice[i].length;j++){
                      if(peiceObj.peice[i][j]==1){
                          let p= peiceObj.x+j;
                          let q= peiceObj.y+i;
                         grid[q][p]=peiceObj.peiceClr;
            
                        }
                    }
                }
                if(peiceObj.y==0){
                    alert("game over");
                    grid=genetratGrid();
                    score=0;
                }
                peiceObj=null;
            }
            renderGrid();
    

    }

       // push to the left

    function moveLeft(){
        if(!area(peiceObj.x-1,peiceObj.y))
        peiceObj.x-=1;
    renderGrid();   
    }
        
     // push to the right

    function moveRight(){
        if(!area(peiceObj.x+1,peiceObj.y))
        peiceObj.x+=1;
        renderGrid();
    }

    // rotate the shape

    function moveUp(){
        let reverse=[];
        let peice=peiceObj.peice;
        for(let i=0;i<peice.length;i++){
            reverse.push([]);
            for(let j=0;j<peice[i].length;j++){
                reverse[i].push(0);
            }
        }
        for(let i=0;i<peice.length;i++){
            for(let j=0;j<peice[i].length;j++){
                reverse[i][j]=peice[j][i];
            }
        }
        for(let i=0;i<reverse.length;i++){
            reverse[i]=reverse[i].reverse();
        }
        if(!area(peiceObj.x,peiceObj.y,reverse))
           peiceObj.peice=reverse;
        renderGrid();
    }
    
    
    function genetratGrid(){
        let grid=[];
        for(let i=0;i<row;i++){
            grid.push([]);
            for(let j=0;j<col;j++){
              grid[i].push(0);
            }
        }
        return grid;
    }


function renderGrid() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      ctx.fillStyle = color[grid[i][j]];
      ctx.fillRect(j, i, 1, 1);
    }
  }
  renderPeice();
}

    // to remove the filled row;

    function checkFill() {
        
    
    }
    
      //Adding event listener

    document.addEventListener("keydown",function(e){
      

     
    })
    
