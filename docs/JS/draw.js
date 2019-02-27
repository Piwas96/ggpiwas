var grid = document.getElementById('grid');
var i = 1;

function createGrid(){
    /*1st row*/
    for(i=1;i<42;i++){  
        var div = document.createElement('div');
        div.setAttribute('class', 'pixelwhite');
        grid.append(div);
    }
    /*2nd row*/
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
    /*3rd row*/
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
    /*4th row*/
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
    /*5th row*/
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
    /*6th row*/
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
    /*7th row*/
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
    /*8th row*/
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
    /*9th row*/
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
    /*10th row*/
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
    /*11th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<13)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>12 && i<14)||(i>32 && i< 34)){
            div.setAttribute('class', 'pixelblack');
        }
        if(i>13 && i<33){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*12th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<13)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>12 && i<14)||(i>21 && i<25)||(i>32 && i<34)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>13 && i<22)||(i>24 && i<33)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*13th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<12)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>11 && i<13)||(i>20 && i<26)||(i>33 && i<35)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>14 && i<17)||(i>29 && i<32)){
            div.setAttribute('class', 'pixelred');
        }
        if((i>12 && i<15)||(i>16 && i<21)||(i>25 && i<30)||(i>31 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*14th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<2)||(i>7 && i<12)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>1 && i<8)||(i>11 && i<13)||(i>20 && i<22)||(i>24 && i<26)||(i>33 && i<35)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>13 && i<18)||(i>21 && i<25)||(i>28 && i<33)){
            div.setAttribute('class', 'pixelred');
        }
        if((i>12 && i<14)||(i>17 && i<21)||(i>25 && i<29)||(i>32 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*15th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<2)||(i>10 && i<12)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>1 && i<3)||(i>7 && i<11)||(i>11 && i<13)||(i>20 && i<22)||(i>24 && i<26)||(i>33 && i<35)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>13 && i<18)||(i>21 && i<25)||(i>28 && i<33)){
            div.setAttribute('class', 'pixelred');
        }
        if((i>2 && i<8)||(i>12 && i<14)||(i>17 && i<21)||(i>25 && i<29)||(i>32 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*16th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<2)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>1 && i<3)||(i>10 && i<13)||(i>20 && i<22)||(i>24 && i<28)||(i>33 && i<35)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>14 && i<17)||(i>21 && i<25)||(i>29 && i<32)){
            div.setAttribute('class', 'pixelred');
        }
        if((i>2 && i<11)||(i>12 && i<15)||(i>16 && i<21)||(i>27 && i<30)||(i>31 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*17th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<2)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>1 && i<3)||(i>11 && i<13)||(i>21 && i<26)||(i>27 && i<29)||(i>33 && i<35)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>2 && i<12)||(i>12 && i<22)||(i>25 && i<28)||(i>28 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*18th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<2)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i==2)||(i==13)||(i==25)||(i==29)||(i==33)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>2 && i<13)||(i>13 && i<25)||(i>25 && i<29)||(i>29 && i<33)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*19th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i==1)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i==2)||(i==13)||(i==26)||(i==30)||(i==33)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>2 && i<13)||(i>13 && i<26)||(i>26 && i<30)||(i>30 && i<33)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*20th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i==1)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>1 && i<6)||(i==13)||(i==27)||(i>30 && i<34)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>5 && i<13)||(i>13 && i<27)||(i>27 && i<31)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*21st row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<6)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>5 && i<9)||(i==13)||(i==27)||(i==31)||(i==33)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>8 && i<13)||(i>13 && i<27)||(i>27 && i<31)||(i==32)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*22nd row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<9)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>8 && i<11)||(i==13)||(i==18)||(i==28)||(i==33)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>10 && i<13)||(i>13 && i<18)||(i>18 && i<28)||(i>28 && i<33)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*23rd row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<7)||(i>33)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>6 && i<9)||(i==13)||(i==18)||(i==28)||(i==33)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>8 && i<13)||(i>13 && i<18)||(i>18 && i<28)||(i>28 && i<33)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*24th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<5)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>4 && i<7)||(i>9 && i<13)||(i==18)||(i==34)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>6 && i<10)||(i>12 && i<18)||(i>18 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*25th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<4)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i==4)||(i>7 && i<13)||(i==15)||(i==19)||(i==34)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>4 && i<8)||(i>12 && i<15)||(i>15 && i<19)||(i>19 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*26th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<5)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>4 && i<7)||(i>9 && i<13)||(i==15)||(i==19)||(i==34)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>6 && i<10)||(i>12 && i<15)||(i>15 && i<19)||(i>19 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*27th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        if((i<7)||(i>34)){
            div.setAttribute('class', 'pixelwhite');
        }
        if((i>6 && i<9)||(i==12)||(i==16)||(i==19)||(i==34)){
            div.setAttribute('class', 'pixelblack');
        }
        if((i>8 && i<12)||(i>12 && i<16)||(i>16 && i<19)||(i>19 && i<34)){
            div.setAttribute('class', 'pixelyellow');
        }
        grid.append(div);
    }
    /*28th row*/
    for(i=1;i<42;i++){
        var div = document.createElement('div');
        div.setAttribute('class', 'pixelwhite');
        grid.append(div);
    }
}
createGrid();