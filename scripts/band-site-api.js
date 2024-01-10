const url = "https://project-1-api.herokuapp.com/";

const apiKey = "763ae118-ef81-46d0-b66d-44fb83b2cf2e";
//Retrieve the 3 existing default comments from the API and display them
const getComments = async () => {
  try {
    const resp = await axios.get(
      "https://project-1-api.herokuapp.com/comments?api_key=${apiKey}"
    );

    console.log(resp.data);
    //Store the Comments data from the API into a variable
    const commentsData = resp.data;

    const commentSection = document.querySelector(".comments__list");
    console.log(commentsData[1]);

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

      //Create new paragraph element with a class for timestamp
      const commentTimestamp = document.createElement("p");
      commentTimestamp.classList.add("comments__timestamp");
      commentTimestamp.innerText = comment.timestamp;

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
