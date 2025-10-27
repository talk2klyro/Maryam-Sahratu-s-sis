// === Maryam Usman Page Script ===
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    // Profile basics
    document.getElementById("name").textContent = data.name;
    document.getElementById("role").textContent = data.role;
    document.getElementById("bio").textContent = data.bio;
    document.getElementById("profile-photo").src = data.photo;
    document.getElementById("visit-btn").href = data.button_url;

    // Apply theme
    document.body.style.background = data.theme.gradient;

    // Cards
    const cardContainer = document.getElementById("cards");
    data.cards.forEach(card => {
      const div = document.createElement("div");
      div.classList.add("info-card");
      div.innerHTML = `<h3>${card.title}</h3><p>${card.content}</p>`;
      cardContainer.appendChild(div);
    });

    // Social links
    document.getElementById("fb").href = data.socials.facebook;
    document.getElementById("ig").href = data.socials.instagram;
    document.getElementById("x").href = data.socials.x;
  })
  .catch(err => console.error("Error loading tutor data:", err));
