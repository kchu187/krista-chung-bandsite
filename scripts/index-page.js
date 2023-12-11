//Grab from DOM + define Variables for Comment section

const commentForm = document.querySelector(".comments__form");
const commentSection = document.querySelector(".comments__container");

// Create an empty array to store comments
const comments = [];

//Create default comments
const User1Comment = {
  name: "Miles Acosta",
  content:
    "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
};

const User2Comment = {
  name: "Emilie Beach",
  content:
    "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day",
};

const User3Comment = {
  name: "Connor Walton",
  content:
    "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
};

//Push the existing/default comments into the Object array
comments.push(User3Comment, User2Comment, User1Comment);

//Create a loop to renderdefault comments onto page
for (let i = 0; i < comments.length; i++) {
  //For each object in the array, create a new Div to contain name+content and classes.
  const commentInitDiv = document.createElement("div");
  commentInitDiv.classList.add("comments__item");

  //Create a new paragraph element with a class for name values
  const commentInitNameTitle = document.createElement("p");
  commentInitNameTitle.classList.add("comments__name");
  commentInitNameTitle.innerText = comments[i].name;

  //Create a new paragraph element with a class for comment contents
  const commentInitContent = document.createElement("p");
  commentInitContent.classList.add("comments__content");
  commentInitContent.innerText = comments[i].content;

  //Append the div onto comment section and the Name + content as child of div
  commentInitDiv.appendChild(commentInitNameTitle);
  commentInitDiv.appendChild(commentInitContent);
  commentSection.appendChild(commentInitDiv);
}

//Add EventListener to add input values of HTML form into comments array
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentName = event.target.nameInput.value;
  const commentContent = event.target.commentInput.value;

  if (commentName !== "" && commentContent !== "") {
    comments.unshift({
      name: commentName,
      content: commentContent,
    });

    renderComments();
    event.target.reset();
  } else {
    alert("Please enter some text");
  }
});

//Create a function to render new comments from the HTML form
function renderComments() {
  commentSection.innerHTML = "";
  comments.forEach((comment) => {
    const commentDiv = document.createElement("div");
    const commentNameTitle = document.createElement("p");
    commentNameTitle.innerText = comment.name;

    const commentContent = document.createElement("p");
    commentContent.innerText = comment.content;

    commentDiv.appendChild(commentNameTitle);
    commentDiv.appendChild(commentContent);
    commentSection.appendChild(commentDiv);
  });
}
