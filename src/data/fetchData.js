import mockedData from "../data/mockedData.json"

/**
 * Fetch data from url
 * @param {string} url 
 * @returns {Promise}
 */

async function fetchData() {
   return new Promise((res) => res(mockedData).json());
}

export default fetchData;