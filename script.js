// 1)
// This line selects the menu button from the HTML using its id
var menu_btn = document.getElementById("menu_btn");
// 2)
// This line selects the side navigation bar.
var sideNav = document.getElementById("sideNav");
// 3)
// This is a boolean variable.
// false means the side navigation is closed
// true means the side navigation is open
// At the start, the menu is closed.
var isOpen = false;
// 4)
// This means:
// When the menu button is clicked, run this function.
menu_btn.onclick = function () {
// 5)
// This checks:
// Is the side navigation  open?
    if (isOpen) {
//6)
// If it is open, move the side navigation outside the screen (hide it).
        sideNav.style.right = "-250px";
//7)
// Update the status:
// Now the menu is closed.
        isOpen = false;
         // this is used to show that when the sidenav is close then show the menu
              menu.src = "images/menu.png" ;

    } 
//8)
//  if the side navigation already close then ?
    else {
// 9)      
// Move the side navigation into the screen (show it).
        sideNav.style.right = "0";
// 10)
// Update the status:
// Now the menu is open.
        isOpen = true;
     // this is used to show that when the sidenav is open then show the X
      menu.src = "images/close.png" ;
    }
}

// script for smoothness

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
