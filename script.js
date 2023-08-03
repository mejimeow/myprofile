const switchtoggle = document.querySelector('input[type="checkbox"]');
const toggleicon = document.getElementById('toggle-icon');
const nav=document.getElementById('Nav-1');
function switchmode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        console.log("dark mode")
        darkmode();
    }
    else{
        document.documentElement.setAttribute('data-theme','light')
        console.log("light mode")
        lightmode();
    }
}
function darkmode(){
    toggleicon.children[0].textContent="Dark Mode";
    toggleicon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0/50%)';

}
function lightmode(){
    toggleicon.children[0].textContent="Light Mode";
    toggleicon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='#efefef';
}
switchtoggle.addEventListener('change',switchmode);