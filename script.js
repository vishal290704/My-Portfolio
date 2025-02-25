
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    // let name = document.getElementById("name-nav");
    const myButton = document.getElementById("name-nav");
    const NAV = document.getElementById("nav");

// const toggleVisibility = () => {
//   if (window.scrollY > 500) {
//     myButton.classList.add("visible");
//     NAV.style.backgroundColor = "black";
//   } else {
//     myButton.classList.remove("visible");
//     NAV.style.backgroundColor = "transparent";
//   }
// };

// window.addEventListener("scroll", toggleVisibility);