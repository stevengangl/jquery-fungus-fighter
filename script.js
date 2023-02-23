$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let newHealth = 50;
let attackPoint = 100;

function onReady() {
    console.log('in onReady function')
    $('.attack-btn.arcane-sceptre').on('click', decreaseHealth)
    
    $('.attack-btn entangle').on('click', decreaseHealth)

    $('.attack-btn dragon-blade').on('click', decreaseHealth)

    $('.attack-btn star-fire').on('click', decreaseHealth)


    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render()
}

function decreaseHealth(){
    console.log('in decreaseHealth function');
    newHealth --;
}

function render(){
    $(".hp-text").html(newHealth)
}