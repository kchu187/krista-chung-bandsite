const commentForm = document.getElementById("comments__form");
const commentSection = document.querySelector(".comments");
const comments = [];

window.onload = commentForm;
console.log(commentForm);
console.log(comments);

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentName = event.target.nameInput.value;
  const commentContent = event.target.commentInput.value;

  if (nameInput !== "" && commentInput !== "") {
    comments.push({
      name: nameInput,
      comment: commentInput,
    });
    renderComments();
    event.target.reset();
  } else {
    alert("Please enter some text");
  }
});

console.log(commentForm);
