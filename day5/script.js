console.log("hii");

// select all h1 elements
let h1 = document.getElementsByTagName('h1');

// change text
h1[0].innerHTML = "hi this is h1 tag";

// change text color
h1[0].style.color = "aqua"
// change background color
h1[0].style.backgroundColor = "yellow";

// add background image
h1[0].style.backgroundImage = "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')";
h1[0].style.backgroundSize = "cover";
h1[0].style.backgroundPosition = "center";

// padding for better look
h1[0].style.padding = "20px";

h2[0].style.color= "blue"
h2[0].style.backgroundColor= "yellow"

//  add background image
h2[0].style.backgroundImage = "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')";
h2[0].style.backgroundSize = "cover";
h2[0].style.backgroundPosition = "center";


console.log(h1);