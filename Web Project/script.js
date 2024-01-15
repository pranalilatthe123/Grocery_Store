
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    Menu.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}

// Handle form submission for search
searchForm.onsubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the value entered in the search box
    var searchTerm = document.getElementById("search-box").value;

    // Perform any additional processing or validation if needed

    // Redirect to the search results on the same page
    searchItem(searchTerm);
}

// Function to search for and scroll to the item on the page
function searchItem(itemName) {
    // Assuming your items have a specific class (e.g., 'box') that can be used to identify them
    var items = document.querySelectorAll('.box');

    // Loop through the items to find a match
    for (var i = 0; i < items.length; i++) {
        var currentItem = items[i];
        var currentTitle = currentItem.querySelector('h3');

        // Check if the item title matches the search term
        if (currentTitle && currentTitle.innerText.toLowerCase().includes(itemName.toLowerCase())) {
            // Scroll to the found item
            window.scrollTo({
                top: currentItem.offsetTop - 100, // You can adjust the offset as needed
                behavior: 'smooth'
            });

            // Optionally, you can highlight or perform other actions on the found item
            currentItem.style.border = '2px solid red';

            // Stop searching after the first match (remove this line if you want to find all matches)
            break;
        }
    }
}


let Login=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    Login.classList.toggle('active');
    Menu.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
}
let Menu=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    Menu.classList.toggle('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}
window.onscroll=()=>{
    Menu.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    750: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});