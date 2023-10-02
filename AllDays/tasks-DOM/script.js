document.addEventListener("DOMContentLoaded", function () {
   // Get references to the button and the output element
   const displayButton = document.getElementById("displayButton");
   const outputElement = document.getElementById("output");

   // Define the array
   

   // Function to display the original and cloned arrays
   function displayArrays() {
      let a = [1, 2, 3, 4];
      
      let b = x.map(i => i);
      console.log(b)

      // Display the original and cloned arrays in the output element
      outputElement.textContent = `Original Array: [${myArray.join(", ")}]\nCloned Array: [${clonedArray.join(", ")}]`;
   }

   // Add a click event listener to the button
   displayButton.addEventListener("click", displayArrays);
});
