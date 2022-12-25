let text = document.querySelector("input");
let output = document.querySelector("#duplicateField");
const buttom = document.querySelector("button");
text.addEventListener("input", function(e) {
  output.textContent = text.value; 
});

buttom.addEventListener("click", function(e){
    e.preventDefault();
    console.log(text.value);
    output.textContent = "";
    text.value = "";
})

