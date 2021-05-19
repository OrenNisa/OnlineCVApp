window.onload = function () {
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myPic');
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    /*progress bar */
    const barsMaximum = {"javaBar":100, "cBar":75, "cppBar":85, "pythonBar":65}
    const Bars = document.getElementsByClassName("progress");
    for (i = 0; i < Bars.length; i++) {
        Bars[i].onmouseenter = move; }

    function move() {
        var bar = this.children[0].id;
        for(j = 0; j < barsMaximum[bar]; j++) {
            this.children[0].style.width = j.toString() + "%";
            //alert("Hello! I am an alert box!!");
            var id = setTimeout(null, 2000);
        }
    }

    txtarea = document.getElementById("textToSubmit");
    txtarea.addEventListener("input", counter);
    currentChars = document.getElementById('curChars');
    button = document.getElementById('submitBtn');
    function counter() {
        charLength = this.value.length;
        currentChars.innerText = charLength.toString();
        if (charLength > 200) {
            button.disabled = true;
            currentChars.style.color = "red";
        }
        else{
            button.disabled = false;
            currentChars.style.removeProperty('color');
        }
    }

    button.addEventListener("click", isEmpty);
    function isEmpty() {
        var x = document.querySelectorAll("div > input");
        if(currentChars.innerText == "0"){
            alert("The fields are not full");
            return false;
        }
        for (var i = 0; i < x.length; i++){
            if (x[i].value == "") {
                alert("The fields are not full");
                return false;
            }
        }
    }
}