document.getElementById('fetchButton').addEventListener('click', fetchUsersXHR);

//using XHR request
function fetchUsersXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api/?results=5', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      displayUsers(data.results);
    } else {
      console.error('Error fetching data');
    }
  };

  xhr.onerror = function () {
    console.error('Request error');
  };

  xhr.send();
}

// using fetch request
function fetchUsersFetchApi() {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        displayUsers(data.results);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  //formatting the fetched data
function displayUsers(users) {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';

    userCard.innerHTML = `
      <img src="${user.picture.thumbnail}" alt="User Picture">
      <div>
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    userList.appendChild(userCard);
  });
}
