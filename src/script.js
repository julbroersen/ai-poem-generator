function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "63fd08b40a55a7od498ecfac7t28e16f";
  let context = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let prompt =
    "You are a poem expert who loves to write short, sassy, funny poems. Your mission is to generate a short, sassy, funny poem of maximum 4 lines. Each line should only have one phrase and be separated with a <br/>. The output should only be the 4 lines of poem, nothing else. Make sure to be polite and to follow the user instructions. Sign the poem at the end with 'xoxo Gossip Girl'";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  new Typewriter("#poem", {
    strings: `Generating a poem about ${instructionsInput.value} xoxo`,
    autoStart: true,
    delay: 20,
    cursor: "",
  });

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
