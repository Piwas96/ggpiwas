var grid = document.getElementById('grid');
var i = 1;

function createGrid(){
    /*Primer fila*/
    for(i=1;i<42;i++){  
        var div = document.createElement('div');
        div.setAttribute('class', 'pixelwhite');
        grid.append(div);
    }
    /*Segunda Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<20)||(i>26)){
            div.setAttribute('class', 'pixelwhite');
        }
        if(i>19 && i<27){
            div.setAttribute('class', 'pixelblack');
        }
        grid.append(div);
    }
    /*Tercera Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<17)||(i>29)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>16 && i<20)||(i>26 && i<30)){
            div.setAttribute('class', 'pixelblack');
        }
        if(i>19 && i<27){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
}
createGrid();