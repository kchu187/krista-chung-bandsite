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
];

console.log(showsData[1]);
console.log(Object.keys(showsData[0]));
console.log("Hey :D");

const showsHeaders = Object.keys(showsData[0]);

//Create a media query for screen sizes above mobile
const mobileSizing = window.matchMedia("(max-width:320px");
// Create a container for all Shows
const showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");

//Append this container to Shows section
const showsSection = document.querySelector(".shows");
showsSection.appendChild(showsContainer);

// Create a function to render shows data into a table
function renderShows() {
  showsData.forEach((show) => {
    //Create an article section for each show
    const showsArticle = document.createElement("article");
    showsArticle.classList.add("shows__block");
    showsContainer.appendChild(showsArticle);

    //Create heading for date for mobile sizing
    if (mobileSizing.matches) {
      const dateHeader = document.createElement("h2");
      dateHeader.classList.add("shows__header");
      dateHeader.innerText = "DATE";
      showsArticle.appendChild(dateHeader);
    }
    //Create paragraph for date data
    const dateData = document.createElement("p");
    dateData.classList.add("shows__data--date");
    dateData.innerText = show.date;
    showsArticle.appendChild(dateData);

    //Create heading for venue
    if (mobileSizing.matches) {
      const venueHeader = document.createElement("h2");
      venueHeader.classList.add("shows__header");
      venueHeader.innerText = "VENUE";
      showsArticle.appendChild(venueHeader);
    }

    //Create paragraph for venue data
    const venueData = document.createElement("p");
    venueData.classList.add("shows__data");
    venueData.innerText = show.venue;
    showsArticle.appendChild(venueData);

    //Create heading for location
  });
}

renderShows();
