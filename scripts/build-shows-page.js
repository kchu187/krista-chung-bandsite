//Create a shows Container via DOM
const showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");

//Append this container to Shows section
const showsSection = document.querySelector(".shows");
showsSection.appendChild(showsContainer);

//Create function when clicking on show to apply selected state
document.addEventListener("click", function (event) {
  // If clicked element is a show/element within shows block, store it as a variable
  const clickedBlock = event.target.closest(".shows__block");

  // Remove the "active" class from all blocks to avoid multi active states
  if (clickedBlock) {
    document.querySelectorAll(".shows__block").forEach((block) => {
      block.classList.remove("active");
    });

    // Add the "active" class to only the clicked shows block stored earlier
    clickedBlock.classList.add("active");
  }
});

myBandSiteApi.getShows();
