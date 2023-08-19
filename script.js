let qno = [];
while (qno.length < 5) {
  let r = Math.floor(Math.random() * 50);
  if (qno.indexOf(r) === -1) qno.push(r);
}
let score = 0;
let k = 0;
let url = "https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple";
let response = fetch(url);
console.log(url)
response.then((v) => {
  return v.json();
}).then((arr) => {
  console.log(arr);
  displayques(arr);
})
const displayques = (arr) => {
  console.log(k)
  let ano = [];
  while (ano.length < 4) {
    let r = Math.floor(Math.random() * 4);
    if (ano.indexOf(r) === -1) ano.push(r);
  }
  console.log(ano);
  (arr.results[qno[k]].incorrect_answers).push(arr.results[qno[k]].correct_answer);
  let options = arr["results"][qno[k]].incorrect_answers
  console.log(options)
  ques.innerHTML = `<div class="card">
  <h5 class="card-header">${arr["results"][qno[k]].question}</h5>
  <div class="card-body">
    </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="${options[0]}">
    <label class="form-check-label" for="exampleRadios1">${options[0]}
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="${options[1]}">
    <label class="form-check-label" for="exampleRadios2">
      ${options[1]}
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="${options[2]}">
    <label class="form-check-label" for="exampleRadios3">
      ${options[2]}
    </label>
  </div>
    <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="${options[3]}">
    <label class="form-check-label" for="exampleRadios4">
    ${options[3]}
    </label>
  </div>`
  if (k == 4) {
    document.getElementById("next").style.visibility = 'hidden';
    document.getElementById("sub").style.visibility = 'visible';
  }
  next.addEventListener("click", function() {
    var selected = document.querySelector('input[type=radio][name=exampleRadios]:checked');
    console.log(selected.value)
    if (selected.value == arr.results[qno[k]].correct_answer) {
      score = score + 10;
    }
    else {
      score = score - 1;
    }
    k++;
    displayques(arr);
  });
  sub.addEventListener("click", function() {
    var selected = document.querySelector('input[type=radio][name=exampleRadios]:checked');
    console.log(selected.value)
    if (selected.value == arr.results[qno[k]].correct_answer) {
      score = score + 10;
    }
    else {
      score = score - 1;
    }
    console.log(score)
    ques.innerHTML = `Your Score is ${score}`;
    document.getElementById("sub").style.visibility = 'hidden';
  });
}
console.log(qno);
