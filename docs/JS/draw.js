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
    /*Cuarta Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<13)||i>33){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>12 && i<17)||(i>29 && i<34)){
            div.setAttribute('class', 'pixelblack');
        }
        if(i>16 && i<30){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*Quinta Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<11)||(i>35)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>10 && i<13)||(i>33 && i<36)){
            div.setAttribute('class', 'pixelblack');
        }
        if(i>12 && i<34){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*Sexta fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<9)||(i>37)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>8 && i<11)||(i>35 && i<38)){
            div.setAttribute('class', 'pixelblack');
        }
        if(i>10 && i<36){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*Septima Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<8)||(i>38)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>7 && i<9)||(i>37 && i<39)){
            div.setAttribute('class', 'pixelblack');
        }
        if(i>8 && i<38){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*Octava Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<7)||(i>39)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>6 && i<9)||(i>12 && i<14)||(i>31 && i<33)||(i>37 && i<40)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>8 && i<13)||(i>13 && i<32)||(i>32 && i<38)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*Novena Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<6)||(i>40)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>5 && i<10)||(i>11 && i<14)||(i>16 && i<19)||(i>26 && i<29)||(i>31 && i<35)||(i>36 && i<41)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>9 && i<12)||(i>13 && i<17)||(i>18 && i<27)||(i>28 && i<32)||(i>34 && i<37)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*Decima Fila*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<5)||(i>11 && i<13)||(i>33 && i<35)||(i>40)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>4 && i<12)||(i>12 && i<14)||(i>14 && i<17)||(i>22 && i<24)||(i>28 && i<31)||(i>32 && i<34)||(i>34 && i<41)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>13 && i<15)||(i>16 && i<23)||(i>23 && i<29)||(i>30 && i<33)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
}
createGrid();