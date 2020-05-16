

next = function() {

    console.log( "next" );

    var aEl1 = window.order[ 0 ];
    var aEl2 = window.order[ 1 ];

    aEl1.classList.add("fade");

    setTimeout( function() {

        aEl1.classList.add( "hidden" );
        aEl1.classList.remove( "fade" );
        aEl2.classList.remove( "hidden" );

        window.order[ 2 ] = window.order[ 0 ];
        window.order[ 0 ] = window.order[ 1 ];
        window.order[ 1 ] = window.order[ 2 ];

    }, 1000 );
    

}

document.addEventListener("DOMContentLoaded", function(event) { 
    
    window.order = [ "one", "two" ].map( document.getElementById.bind( document ) );

    document.getElementById( "btn-page-1" ).onclick = next;


  });