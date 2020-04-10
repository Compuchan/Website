let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.modes');

console.log("darkMode");

const habDarkMode = () =>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "habilitado");
}

const desDarkMode = () =>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", null);
}

if (darkMode === "habilitado"){
    habDarkMode();
}

darkModeToggle.addEventListener("click", () =>{
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "habilitado"){
        habDarkMode();
    }else{
        desDarkMode();
    }
});