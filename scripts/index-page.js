//Grab from DOM + define Variables for Comment section

const commentForm = document.querySelector(".comments__form");
const commentSection = document.querySelector(".comments__list");

// Create an empty array to store comments
const comments = [];

//Create default comments
const User1Comment = {
  name: "Miles Acosta",
  content:
    "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  timestamp: "12/20/2020",
};

const User2Comment = {
  name: "Emilie Beach",
  content:
    "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day",
  timestamp: "12/20/2020",
};

const User3Comment = {
  name: "Connor Walton",
  content:
    "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  timestamp: "12/20/2020",
};

//Push the existing/default comments into the Object array
comments.push(User1Comment, User2Comment, User3Comment);

//Create a loop to renderdefault comments onto page
function renderInitComment() {
  for (let i = 0; i < comments.length; i++) {
    //For each object in the array, create a new Div to contain name+content and classes.
    //Note c will be used as abbreviation for "comment", an to make variables less visually cluttered

    const commentDefList = document.createElement("li");
    commentDefList.classList.add("comments__item");

    //Create an avatar placeholder
    const commentAvatar = document.createElement("div");
    commentAvatar.classList.add("comments__avatar");

    //Create a new paragraph element with a class for name values
    const commentDefName = document.createElement("p");
    commentDefName.classList.add("comments__name");
    commentDefName.innerText = comments[i].name;

    //Create a new paragraph element with a class for comment contents
    const commentDefContent = document.createElement("p");
    commentDefContent.classList.add("comments__content");
    commentDefContent.innerText = comments[i].content;

    //Create new paragraph element with a class for timestamp
    const commentTimestamp = document.createElement("p");
    commentTimestamp.classList.add("comments__timestamp");
    commentTimestamp.innerText = comments[i].timestamp;

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
  }
}

renderInitComment();

//Add EventListener to add input values of HTML form into comments array
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  comments.splice(0, comments.length);
  const commentName = event.target.nameInput.value;
  const commentContent = event.target.commentInput.value;

  if (commentName !== "" && commentContent !== "") {
    comments.unshift({
      name: commentName,
      content: commentContent,
      timestamp: Date.now(),
    });

    renderInitComment();
    event.target.reset();
  } else {
    alert("Please enter some text");
  }
});

//Create a function to render new comments from the HTML form ---Can possibly deprecate)
// function renderComments() {
//   commentSection.innerHTML = "";
//   comments.forEach((comment) => {
//     const commentList = document.createElement("li");
//     commentList.classList.add("comments__item");
//     const commentNameTitle = document.createElement("p");
//     commentNameTitle.innerText = comment.name;

//     const commentContent = document.createElement("p");
//     commentContent.innerText = comment.content;

//     commentList.appendChild(commentNameTitle);
//     commentList.appendChild(commentContent);
//     commentSection.appendChild(commentList);
//   });
// }

// const currentDate = new Date();
// const timestamp = currentDate.getTime();

// console.log(timestamp);

// console.log(Date.now());
