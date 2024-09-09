// event listner part-1

document.getElementById("mybutton").addEventListener("click", function() {
    alert("Hello the has been executed!");
});

// event listner part-2

document.getElementById("color").addEventListener("click", function() {
    this.textContent = "clicked";
    this.style.backgroundcolor="green";
});
