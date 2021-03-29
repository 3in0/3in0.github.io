
dont2 = function() {

    document.getElementById( "hide" ).style.display = "none";

}

dont = function() {

    document.getElementById( "hide" ).style.display = "";

    setTimeout( dont2, 500 );

}

document.addEventListener("DOMContentLoaded", function(event) { 
    
    document.getElementById( "hide" ).style.display = "none";

    document.onkeyup = dont;


  });