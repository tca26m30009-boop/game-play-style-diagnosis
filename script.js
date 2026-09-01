let score = 0;

const scoreDisplay = document.getElementById("score");

const questions = [];

for (let i = 1; i <= 10; i++) {
  questions.push(document.getElementById("question" + i));
}

let currentQuestion = 0;


function showNextQuestion() {

  questions[currentQuestion].style.display = "none";

  currentQuestion++;

  if (currentQuestion < questions.length) {
    questions[currentQuestion].style.display = "block";
  }

}


questions.forEach(function(question, questionIndex) {

  const buttons = question.querySelectorAll("button");

  buttons.forEach(function(button) {

    button.addEventListener("click", function() {

      const point = Number(button.dataset.score);

      score = score + point;

      scoreDisplay.textContent = score;

      buttons.forEach(function(button) {
        button.disabled = true;
      });


      if (questionIndex < questions.length - 1) {

        showNextQuestion();

      } else {

        showResult();

      }

    });

  });

});


function showResult() {

  let resultTitle = "";
  let resultText = "";


  if (score === 10) {

    resultTitle = "完全一致";
    resultText = "私と君のゲームのプレイスタイルが完全一致…一緒に遊べば無敵かも笑";

  } else if (score >= 6) {

    resultTitle = "かなり似てる…";
    resultText = "私と君のゲームのプレイスタイルは…近いみたい。今度一緒に遊んでみる？";

  } else if (score >= 3) {

    resultTitle = "そこそこ似てる";
    resultText = "私と君、似てるところもあれば違うところもあるみたい。お互い尊重していこう";

  } else {

    resultTitle = "あまり似てない";
    resultText = "私と君のゲームのプレイスタイルは結構違うらしい…これ、もしかしたらお互いに欠点埋め合える可能性あって激アツ笑";

  }


  document.body.innerHTML = `

    <h1>診断結果</h1>

    <h2>${resultTitle}</h2>

    <p>${resultText}</p>

    <p>あなたの得点：${score} / 10点</p>

  `;

}
