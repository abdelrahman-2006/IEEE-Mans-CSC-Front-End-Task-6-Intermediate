const savedFirstName = window.sessionStorage.getItem('firstName');
const savedLastName = window.sessionStorage.getItem('lastName');
const savedCity = window.sessionStorage.getItem('city');
const savedJobRole = window.sessionStorage.getItem('jobRole');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const city = document.getElementById('city');
const jobRole = document.getElementById('job-role');


if(savedFirstName) {
    firstName.value = savedFirstName;
}
if(savedLastName) {
    lastName.value = savedLastName;
}
if(savedCity) {
    city.value = savedCity;
}
if(savedJobRole) {
    jobRole.value = savedJobRole;
}

firstName.addEventListener('input', (e) => {
    window.sessionStorage.setItem('firstName', e.target.value)
});
lastName.addEventListener('input', (e) => {
    window.sessionStorage.setItem('lastName', e.target.value)
});
city.addEventListener('input', (e) => {
    window.sessionStorage.setItem('city', e.target.value)
});
jobRole.addEventListener('change', (e) => {
    window.sessionStorage.setItem('jobRole', e.target.value)
});