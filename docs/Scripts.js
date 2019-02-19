<script>
    var sliderIndex = 0;
    slider();
    
    function slider() {
        var i;
        var x = document.getElementsByClassName("img_responsive");
        for (i = 0; i<x.lenght; i++){
            x[i].style.display = "none";
        }
        sliderIndex++;
        if (sliderIndex>x.length){
            sliderIndex = 1
        }
        x[sliderIndex-1].style.display = "block";
        setTimeout(slider, 3000)
    }
</script>