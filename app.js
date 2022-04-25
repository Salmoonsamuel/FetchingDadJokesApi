const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJoke();
});

// Simple way to access api with user agent

// const fetchDadJoke =async () => {
//     const response = await fetch(url, {
//         headers: {
//             Accept: 'application/json',
//             'user-Agent': 'learning app'
//         },
//     });
//     const data = await response.json();
//     result.textContent=data.joke; 
// }

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (!response.ok) {
      throw new Error(' error');
    }
    const data = await response.json();

    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = 'There was an error...';
  }
};
fetchDadJoke();
