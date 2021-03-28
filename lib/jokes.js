import fetch from "node-fetch";

export async function getRandomJoke() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"
  );
  const joke = await response.json();
  return joke;
}
