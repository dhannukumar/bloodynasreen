(function () {'use strict';
    window.addEventListener('load', ready);

    function ready() {
        document.getElementById("image1").style.top = '320px';
        document.getElementById("image1").style.left = '12px';
    }

    window.addEventListener('keydown', move);
    
    function leftarrow() {
        var element = document.getElementById("image1");
        if (element.style.left <= "0px") {
            element.src = "front.png";
        } else {
            element.style.left = parseInt(element.style.left) - 10 + 'px';
            element.src = "left.png";
        }
    }
      function rightarrow() {
        var Width, element;  
        Width = document.getElementById("image1").width;
        element = document.getElementById("image1");
        document.getElementById("image1").innerHTML = element;
        if (parseInt(element.style.left) > (window.innerWidth - Width) ) {
            element.src = "right.png";
            element.src = "front.png";
        } else {
            element.style.left = parseInt(element.style.left) + 10 + 'px';
            element.src = "right.png";
        }
    }
    
    function uparrow() {
        var id;
        document.getElementById("image1").style.top = '320px';
        id = setInterval(move, 20);
        function move() {
            document.getElementById("image1").style.top = parseInt(document.getElementById("image1").style.top) - 10 +"px";
            if ( parseInt(document.getElementById("image1").style.top) === 200) {
                document.getElementById("image1").style.top = '320px';
                clearInterval(id);
            }
        }
    }
              
    function punch() {
        var element = document.getElementById("image1");
        element.src = "punch.gif";
        setTimeout(function () { element.src = "front.png";
            clearTimeout(punch);
            }, 500);
            
    }
  
    function move(event) {
        switch (event.keyCode) {
        case 37:
            leftarrow();
            break;
        case 38:
            uparrow();
            break;
        case 39:
            rightarrow();
            break;
        case 80:
            punch();
            break;
        }
    }
    })();
