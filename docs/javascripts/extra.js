document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".quiz-options").forEach(function (optionsDiv) {
    var correct = optionsDiv.getAttribute("data-correct");
    var feedbackDiv = optionsDiv.nextElementSibling;

    optionsDiv.querySelectorAll(".quiz-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (optionsDiv.classList.contains("answered")) return;
        optionsDiv.classList.add("answered");

        var selected = btn.getAttribute("data-value");
        var isCorrect = selected === correct;

        btn.classList.add(isCorrect ? "correct" : "incorrect");

        optionsDiv
          .querySelector('[data-value="' + correct + '"]')
          .classList.add("correct");

        feedbackDiv.textContent = isCorrect
          ? feedbackDiv.getAttribute("data-correct")
          : feedbackDiv.getAttribute("data-incorrect");
        feedbackDiv.classList.add(isCorrect ? "feedback-correct" : "feedback-incorrect");
        feedbackDiv.style.display = "block";
      });
    });
  });
});
