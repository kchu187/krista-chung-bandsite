class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://project-1-api.herokuapp.com/";
  }

  //Method for fetching shows data via API and displaying it
  getShows = async () => {
    const showsResp = await axios.get(
      this.baseURL + "showdates?api_key=" + this.apiKey
    );

    console.log(showsResp.data[1]);

    const showsData = showsResp.data;
    console.log(Object.keys(showsData[0]));
    console.log(showsData[0]);
    const showsHeaders = Object.keys(showsData[0]);

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

      //Create read-able timestamps
      const timestamp = show.date;

      const localTimeStamp = (timestamp) => {
        const localTime = new Date(timestamp);
        const options = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        };

        return localTime.toLocaleDateString("en-US", options);
      };

      const formattedTime = localTimeStamp(timestamp);
      //Create paragraph for date data
      const dateData = document.createElement("p");
      dateData.classList.add("shows__data--date");
      dateData.innerText = formattedTime;
      showsArticle.appendChild(dateData);

      // Create heading for venue

      const venueHeader = document.createElement("h2");
      venueHeader.classList.add("shows__header--mobile");
      venueHeader.innerText = "VENUE";
      showsArticle.appendChild(venueHeader);

      //Create paragraph for venue data
      const venueData = document.createElement("p");
      venueData.classList.add("shows__data");
      venueData.innerText = show.place;
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

    try {
    } catch (error) {
      console.log(error);
    }
  };
}

//Create instance for BandSiteAPI class
const myBandSiteApi = new BandSiteAPI("763ae118-ef81-46d0-b66d-44fb83b2cf2e");
