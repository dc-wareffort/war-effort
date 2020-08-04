import fetch from 'axios';
import mock from './mock.json';

export async function getData(sheetsURL) {
  const gson ="https://gson.fayazara.now.sh/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vQvPQm7xh1xESblJ4Np_NK7pQJZcL1o5bVUtezieIjLwiRsEvK3-7VI9iS93tr8b3UqqVA9ScR5qV6x/pub?output=csv" 

  const grab = await fetch(gson);

  //return grab.data;
  const data = grab.data;
  return transformData(data);
  // return mock;
}

function transformData(data) {
    var res = [
        {key: 'ally-total'},
        {key: 'ally-current'},
        {key: 'horde-total'},
        {key: 'horde-current'}
    ];

    for (var row of data) {
        res[0][row.item1] = row['ally-total'];
        res[1][row.item1] = row['ally-current'];
        res[2][row.item2] = row['horde-total'];
        res[3][row.item2] = row['horde-current'];
    }

    return res;
}

// old gson link
// const gson = `https://gson.fayazara.now.sh?url=${sheetsURL}`;
