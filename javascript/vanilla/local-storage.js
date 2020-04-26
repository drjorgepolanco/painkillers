/* Local Storage */
/* ------------- */

// https://stackoverflow.com/questions/56824115/storing-data-into-local-storage-after-first-fetch

// On Save
localStorage.setItem('patients', JSON.stringify(json.data.patient))  

// On Retrieve
let patients = JSON.parse(localStorage.getItem('patients'));