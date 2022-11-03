/**
 * Fetch data from url
 * @param {string} url 
 * @returns {Promise}
 */

async function fetchData(url) {
    return fetch(url)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (data) {
            return data;
        })
        .catch(function (err) {
            alert("Erreur : " + err);
        });
}

export default fetchData;