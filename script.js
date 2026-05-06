
function toggleSidebar(){

    let sidebar = document.getElementById("sidebar");
    let main = document.getElementById("main");
    let bar = document.getElementById("zzz");

    if(sidebar.style.display === "none"){
        sidebar.style.display = "block";
        
        sidebar.style.backgroundColor = "rgb(239,243,246)";
        main.style.position = "relative";
        sidebar.style.position = "absolute";
        sidebar.style.height = "92%";
        
        
        document.body.style.overflow = "hidden";
        sidebar.style.overflowX = "scroll";

    }
    else{
        sidebar.style.display = "none";
         document.body.style.overflow = "auto";
        
    }

}