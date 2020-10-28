let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector(`#main-title`).innerHTML = "Hi, I'm Dom. Welcome!";

  // Part 2
  document.querySelector(`body`).style.backgroundColor = "#33E1FF";
  // Part 3
  let last = document.querySelector(`#favorite-things`);
  last.removeChild(last.lastElementChild);


  // Part 4
  function changeSize() {
    let title = document.getElementsByClassName('special-title');
    for (let i = 0; i < title.length; i++) {
      let titles = title[i]
      titles.style.fontSize = "2rem";
    }
  }
  changeSize();


  // Part 5

  function remove() {
    let chicago = document.querySelector(`#past-races`);
    let node = chicago.childNodes[7];
    chicago.removeChild(node);
  }
  remove();

  // Part 6


  let newCity = document.createElement(`li`);
  let text = document.createTextNode(`Boston`);
  newCity.appendChild(text);
  document.querySelector(`#past-races`).appendChild(newCity);


  // Part 7

  let blogPost = document.createElement(`div`);
  blogPost.setAttribute('class', 'blog-post purple');
  let newHeading = document.createElement('h1');
  let newHeadingText = document.createTextNode(`Dom's Famous Words`);
  let newPg = document.createElement(`p`);
  let newPgText = document.createTextNode(`It doesn’t matter whether you win by an inch or a mile, winning is winning.`);
  blogPost.appendChild(newHeading);
  newHeading.appendChild(newHeadingText);
  blogPost.appendChild(newPg);
  newPg.appendChild(newPgText);
  document.querySelector(`.main`).appendChild(blogPost);


}
