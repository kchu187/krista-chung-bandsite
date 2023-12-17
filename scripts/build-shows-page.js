// Create an array containing all shows data

const showsData = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

console.log(showsData[1]);
console.log(Object.keys(showsData[0]));
console.log("Hey :D");

const showsHeaders = Object.keys(showsData[0]);

// window.matchMedia("(max-width:768px");

// Create a container for all Shows
const showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");

//Append this container to Shows section
const showsSection = document.querySelector(".shows");
showsSection.appendChild(showsContainer);
//Create a media query for screen sizes above mobile

// Create a function to render shows data into a table
function renderShows() {
  showsData.forEach((show) => {
    //Create an article section for each show
    const showsArticle = document.createElement("article");
    showsArticle.classList.add("shows__block");
    showsContainer.appendChild(showsArticle);

    //Create headers for date
    const dateHeader = document.createElement("h2");
    dateHeader.classList.add("shows__header--mobile");
    dateHeader.innerText = "DATE";
    showsArticle.appendChild(dateHeader);

    //Create paragraph for date data
    const dateData = document.createElement("p");
    dateData.classList.add("shows__data--date");
    dateData.innerText = show.date;
    showsArticle.appendChild(dateData);

    // Create heading for venue

    const venueHeader = document.createElement("h2");
    venueHeader.classList.add("shows__header--mobile");
    venueHeader.innerText = "VENUE";
    showsArticle.appendChild(venueHeader);

    //Create paragraph for venue data
    const venueData = document.createElement("p");
    venueData.classList.add("shows__data");
    venueData.innerText = show.venue;
    showsArticle.appendChild(venueData);

    //Create heading for location
    const locationHeader = document.createElement("h2");
    locationHeader.classList.add("shows__header--mobile");
    locationHeader.innerText = "LOCATION";
    showsArticle.appendChild(locationHeader);

    //Create paragraph for location data
    const locationData = document.createElement("p");
    locationData.classList.add("shows__data");
    locationData.innerText = show.location;
    showsArticle.appendChild(locationData);

    // Create a button to buy tickets
    const showsButton = document.createElement("a");
    showsButton.classList.add("shows__button");
    showsButton.innerText = "BUY TICKETS";
    showsArticle.appendChild(showsButton);
  });
}
renderShows();
// Create media query for mobile sizing
function mobileHeaderDisplay() {
  const mobileHeaders = document.querySelectorAll(".shows__header--mobile");
  const mobileSizing = window.matchMedia("(min-width: 768px)");

  mobileHeaders.forEach((header) => {
    if (mobileSizing.matches) {
      header.style.display = "none";
    } else {
      header.style.display = "block";
    }
  });
}
mobileHeaderDisplay();
//
//Add Event Listener everytime window is re-sized to check the screen size again by calling
window.addEventListener("resize", mobileHeaderDisplay);
//Function when clicking on show
const showsBlock = document.querySelector(".shows__block");
showsContainer.addEventListener("click", function () {
  console.log("clicked!");
});
