import fetch from 'axios';
import mock from './mock.json';

export async function getData(sheetsURL) {
    const gson = "https://gson.fayazara.now.sh/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vT6-XSxmzjwS6tA1rbT8YVp0hUG7Gnat4hT_H1_ti0hNTdnCE7J9R3YUI5peuGqLPc6dDqhFUH13dfj/pub?output=csv"

  const grab = await fetch(gson);

  return grab.data;
  // return mock;
}

// old gson link
// const gson = `https://gson.fayazara.now.sh?url=${sheetsURL}`;
