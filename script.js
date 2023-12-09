
// Start Menu ⬇️
let home = document.getElementsByClassName("home")[0]
let mega = document.getElementsByClassName("mega-menu")[0]
let megalist = document.querySelectorAll("#mega-list a li")
console.log(megalist)

// show/Hide button
home.addEventListener("click", function(){
    mega.classList.toggle("trans-mega")
})

// Esc to hide menu
document.onkeyup = function(e){
    if(e.key === "Escape"){
        mega.classList.remove("trans-mega")
        }
}

// Hide when click link
megalist.forEach(li => {
    li.addEventListener("click", function(){
        mega.classList.remove("trans-mega")
    })
});
// End Menu ⬆️
