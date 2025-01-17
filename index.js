// Get the element by its ID
var element = document.getElementById("login");

// Add an href attribute to the element
element.setAttribute("href", "3index.html");

// Add a target attribute to the element
element.setAttribute("target", "_blank");

// Add an event listener to the element
element.addEventListener("click", function() {
  // Prevent the default link behavior
  event.preventDefault();

  // Set a timeout to open the link after 10 seconds
  setTimeout(function() {
    window.open("3index.html", "_blank");
  }, 5000); 
});








