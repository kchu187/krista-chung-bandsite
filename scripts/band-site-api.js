const url = "https://project-1-api.herokuapp.com/";

const apiKey = "763ae118-ef81-46d0-b66d-44fb83b2cf2e";
let commentsData = [];
//Retrieve the 3 existing default comments from the API and display them

const getComments = async () => {
  try {
    const commentsResp = await axios.get(
      "https://project-1-api.herokuapp.com/comments?api_key=${apiKey}"
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
getComments();

//Add EventListener to HTMl form to push into comments array via api
const commentForm = document.querySelector(".comments__form");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //Create variables for form elements
  const commentName = event.target.nameInput.value;
  const commentContent = event.target.commentInput.value;
  const commentNameField = document.querySelector(
    ".comments__form-field--name"
  );
  const commentContentField = document.querySelector(
    ".comments__form-field--comment"
  );

  const postComment = async () => {
    await axios.post(
      "https://project-1-api.herokuapp.com/comments?api_key=${apiKey}",
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
    getComments();
  };

  if (commentName !== "" && commentContent !== "") {
    postComment();
    commentNameField.style.removeProperty("border");
    commentContentField.style.removeProperty("border");
    //Reset the form once submitted
    event.target.reset();
    // getComments();
    // Add additional validation checks for each blank field scenario
  } else if (commentName == "" && commentContent == "") {
    alert("Please enter some text");
    commentNameField.style.border = "solid 0.063rem red";
    commentContentField.style.border = "solid 0.063rem red";
  } else if (commentName == "") {
    commentNameField.style.border = "solid 0.063rem red";
    alert("Please enter a name!");
  } else if (commentContent == "") {
    commentContentField.style.border = "solid 0.063rem red";
    alert("Please write a comment!");
  }
});

//getShows function to render show information via API

const getShows = async () => {
  const showsResp = await axios.get(
    "https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}"
  );

  console.log(showsResp.data);
  try {
  } catch (error) {
    console.log(error);
  }
};

getShows();
