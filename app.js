fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.body.style.background = data.theme.gradient;

    const profile = document.getElementById("profile");
    profile.innerHTML = `
      <section class="card-container" style="color:${data.theme.primary}">
        <div class="photo-section">
          <img src="${data.photo}" alt="${data.name}" class="profile-img">
          <h1>${data.name}</h1>
          <h2>${data.role}</h2>
          <p class="bio">${data.bio}</p>
          <a href="${data.button_url}" class="main-btn" style="background:${data.theme.primary};color:white">Visit Profile</a>
        </div>
        <div class="info-section">
          ${data.cards.map(card => `
            <div class="info-card" style="background:${data.theme.secondary}">
              <h3 style="color:${data.theme.accent}">${card.title}</h3>
              <p>${card.content}</p>
            </div>
          `).join("")}
        </div>
        <footer class="socials">
          <a href="${data.socials.facebook}">Facebook</a>
          <a href="${data.socials.instagram}">Instagram</a>
          <a href="${data.socials.x}">X</a>
        </footer>
      </section>
    `;
  });
