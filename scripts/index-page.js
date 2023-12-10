//Define Variables for Comment section

const commentForm = document.querySelector(".comments__form");
const commentSection = document.querySelector(".comments__container");

const comments = []; // Create an empty array to store comments

// // window.onload = commentForm;
// console.log(commentForm);
// console.log(comments);

//Create function for pushing new comments into comments array
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentName = event.target.nameInput.value;
  const commentContent = event.target.commentInput.value;

  if (commentName !== "" && commentContent !== "") {
    comments.push({
      name: commentName,
      content: commentContent,
    });

    renderComments();
    event.target.reset();
  } else {
    alert("Please enter some text");
  }
});

console.log(comments);

function renderComments() {
  commentSection.innerHTML = "";
  comments.forEach(function (comment) {
    const commentDiv = document.createElement("div");
    const commentNameTitle = document.createElement("h2");
    commentNameTitle.innerText = comment.name;

    const commentContent = document.createElement("p");
    commentContent.innerText = comment.content;

    commentDiv.appendChild(commentNameTitle);
    commentDiv.appendChild(commentContent);
    commentSection.appendChild(commentDiv);
  });
}

console.log[comments[1]];

// renderComments();
console.log(commentForm);
