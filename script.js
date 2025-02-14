$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let newHealth = 100;
let attackPoint = 100;

function onReady() {
    console.log('in onReady function')
    $('.attack-btn.arcane-sceptre').on('click', arcaneSceptre)

    $('.attack-btn.entangle').on('click', entangle)

    $('.attack-btn.dragon-blade').on('click', dragonBlade)

    $('.attack-btn.star-fire').on('click', starFire)


    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render()
}
// if no more AP than you cant attack. 
// Give all of the attack buttons a disabled attribute, 
// so they may no longer be used.

function arcaneSceptre() {
    console.log('in arcaneSceptre function');
    console.log('before decrement', newHealth)
    console.log('before decrement', attackPoint)

    newHealth -= 14;
    attackPoint -= 12;
    if (newHealth < 0) {
        newHealth = 0;
    }
    if (attackPoint < 0) {
        attackPoint = 0;

    }
    console.log('after decrement', newHealth)
    console.log('before decrement', attackPoint)

    render()
}

function entangle() {
    console.log('in entangle function');
    console.log('before decrement', newHealth)
    console.log('before decrement', attackPoint)

    newHealth -= 9;
    attackPoint -= 23;
    if (newHealth < 0) {
        newHealth = 0;
    }
    if (attackPoint < 0) {
        attackPoint = 0;
    }
    console.log('after decrement', newHealth)
    console.log('before decrement', attackPoint)

    render()
}

function dragonBlade() {
    console.log('in dragonBlade function');
    console.log('before decrement', newHealth)
    console.log('before decrement', attackPoint)

    newHealth -= 47;
    attackPoint -= 38;
    if (newHealth < 0) {
        newHealth = 0;
    }
    if (attackPoint < 0) {
        attackPoint = 0;
    }
    console.log('after decrement', newHealth)
    console.log('before decrement', attackPoint)

    render()
}

function starFire() {
    console.log('in starFire function');
    console.log('before decrement', newHealth)
    console.log('before decrement', attackPoint)

    newHealth -= 25;
    attackPoint -= 33;
    if (newHealth < 0) {
        newHealth = 0;
    }
    if (attackPoint < 0) {
        attackPoint = 0;
    }
    console.log('after decrement', newHealth)
    console.log('before decrement', attackPoint)

    render()
}

function freakyFungusNoH() {

}
// You may no longer attack, if AP is 0. 
// Give all of the attack buttons 
// a disabled attribute, 
// so they may no longer be used.


function render() {
    $(".hp-text").html(newHealth + ' ' + 'HP')
    $(".ap-text").html(attackPoint + ' ' + 'AP')
    //
    if (newHealth === 0) {
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('dead')
    }
    //if statement to change the fungus class to dead
    // when hp falls to zero

    if (attackPoint === 0) {
        //if statement to change the fungus class to jump
        // when ap falls to zero
        $('.attack-btn').attr('disabled', true)
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('jump')
    }
}