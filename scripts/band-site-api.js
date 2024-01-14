class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://project-1-api.herokuapp.com";
  }
  getComments = async () => {
    try {
      const commentsResp = await axios.get(
        this.baseURL + "/comments?api_key=" + this.apiKey
      );

      console.log(commentsResp.data);
      //Store the Comments data from the API into a variable
      commentsData = commentsResp.data;

      //Sort each comment by timestamp, earliest comment on the bottom
      commentsData.sort((date1, date2) => {
        return date1.timestamp - date2.timestamp;
      });

      const commentSection = document.querySelector(".comments__list");
      console.log(commentsData[1]);

      // Clear the comment section first to avoid double-rendering
      commentSection.innerHTML = "";
      // For each object in the array, create a new div containing name+comment elements
      commentsData.forEach((comment) => {
        const commentDefList = document.createElement("li");
        commentDefList.classList.add("comments__item");

        //Create an avatar placeholder
        const commentAvatar = document.createElement("div");
        commentAvatar.classList.add("comments__avatar");

        //Create a new paragraph element with a class for name values
        const commentDefName = document.createElement("p");
        commentDefName.classList.add("comments__name");
        commentDefName.innerText = comment.name;

        const commentDefContent = document.createElement("p");
        commentDefContent.classList.add("comments__content");
        commentDefContent.innerText = comment.comment;

        //Create read-able timestamps
        const timestamp = comment.timestamp;

        const localTimeStamp = (timestamp) => {
          const localTime = new Date(timestamp);
          const date = localTime.getDate();
          const month = localTime.getMonth() + 1;
          const year = localTime.getFullYear();
          return month + "/" + date + "/" + year;
        };

        const formattedTime = localTimeStamp(timestamp);

        //Create new paragraph element with a class for timestamp
        const commentTimestamp = document.createElement("p");
        commentTimestamp.classList.add("comments__timestamp");
        commentTimestamp.innerText = formattedTime;
        //Create a container/subsection to separate avatar and comment contents
        const commentSubsection = document.createElement("div");
        commentSubsection.classList.add("comments__subsection");

        //Create a container for name and timestamp
        const commentNameContainer = document.createElement("div");
        commentNameContainer.classList.add("comments__name-container");

        //Append the div onto comment section and the Name + content as child of div
        commentDefList.appendChild(commentAvatar);
        commentDefList.appendChild(commentSubsection);
        commentSubsection.appendChild(commentNameContainer);
        commentNameContainer.appendChild(commentDefName);
        commentNameContainer.appendChild(commentTimestamp);
        commentSubsection.appendChild(commentDefContent);
        commentSection.prepend(commentDefList);
      });
    } catch (error) {
      console.error(error);
    }
  };

  postComment = async (commentName, commentContent) => {
    await axios.post(
      this.baseURL + "/comments?api_key=" + this.apiKey,
      {
        name: commentName,
        comment: commentContent,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    myBandSiteApi.getComments();
  };

  //Method for fetching shows data via API and displaying it
  getShows = async () => {
    const showsResp = await axios.get(
      this.baseURL + "/showdates?api_key=" + this.apiKey
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
