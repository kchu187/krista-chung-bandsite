let commentsData = [];

myBandSiteApi.getComments();

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

  if (commentName !== "" && commentContent !== "") {
    myBandSiteApi.postComment(commentName, commentContent);
    commentNameField.style.removeProperty("border");
    commentContentField.style.removeProperty("border");
    //Reset the form once submitted
    event.target.reset();

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

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (event.target.matches(".comments__delete")) {
      // event.preventDefault();
      // const test = event.target.id.value;

      const commentID = event.target.id;
      myBandSiteApi.deleteComment(event.target.id);
    }
  });
});
