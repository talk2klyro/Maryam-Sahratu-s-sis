fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.body.style.background = data.theme.gradient;
    const profile = document.getElementById('profile');

    profile.innerHTML = `
      <div class="card" style="border-color:${data.theme.primary}">
        <img src="${data.photo}" alt="${data.name}" class="profile-img"/>
        <h1 style="color:${data.theme.primary}">${data.name}</h1>
        <h3>${data.role}</h3>
        <p>${data.bio}</p>
        <a href="${data.button_url}" class="btn" style="background:${data.theme.primary};color:white">Visit Page</a>
      </div>

      <div class="cards">
        ${data.cards.map(card => `
          <div class="info-card" style="background:${data.theme.secondary};border-left:5px solid ${data.theme.accent}">
            <h2>${card.title}</h2>
            <p>${card.content}</p>
          </div>
        `).join('')}
      </div>

      <div class="socials">
        <a href="${data.socials.facebook}" target="_blank">Facebook</a>
        <a href="${data.socials.instagram}" target="_blank">Instagram</a>
        <a href="${data.socials.x}" target="_blank">X</a>
      </div>
    `;
  })
  .catch(err => console.error('Error loading data:', err));
