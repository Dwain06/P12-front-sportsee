import mokedData from "../data/mokedData.json"

/**
 * Fetch data from url
 * @param {string} url 
 * @returns {Promise}
 */

async function fetchData() {
   return new Promise((res) => res(mokedData).json());
}

export default fetchData;