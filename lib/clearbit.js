const authorization = "Bearer INSERT YOUR TOKEN HERE";

const fetchClearbit = (userEmail) => {
  const url = `https://person.clearbit.com/v1/people/email/${userEmail}`
  fetch(url, { headers: { Authorization: authorization}})
    .then(response => response.json())
    .then((data) => {
      document.querySelector('#userName').innerText = data.name.fullName
      document.querySelector('#userEmail').innerText = data.email
      document.querySelector('#userBio').innerText = data.bio
      document.querySelector('#userLocation').innerText = data.location
    })
}

const input = document.querySelector('#clearbitEmail')

const getInputValue = () => input.value;

const form = document.getElementById('clearbitForm')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchClearbit(getInputValue());
})










