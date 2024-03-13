document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('menu-toggle').addEventListener('click', hideNav);
});

    function hideNav(){
        
        var navBar = document.getElementById("headerNav");
        if (navBar.style.display==="block"){
            navBar.style.display="none";
        }
        else{
            navBar.style.display="block";
        }
    }


    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('toggle').addEventListener('click', hideLang);
    });
    
        function hideLang(){
            
            var navBar = document.getElementById("switchLang");
            if (navBar.style.display==="block"){
                navBar.style.display="none";
            }
            else{
                navBar.style.display="block";
            }
        }
        


    