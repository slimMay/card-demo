
function showInfo() {
  fetch("https://script.google.com/macros/s/AKfycbz3MMlBffFJJm2NZrDZG-VrmpHbQtC-d9n0-Mc1jEzJ881DbT1Vk3lk0tBI24y8xK0Xhg/exec")
    .then(res => res.json())
    .then(data => {
      const wrapper = document.getElementById("cardWrapper");
      data.forEach(card => {
        const slide = document.createElement("div");
        slide.className = "card swiper-slide";
        slide.innerHTML = `
  <img class="card-img" src="${card.pictureLink}" alt="">
  <div class="card-content">
    <h2 class="name">${card.cardName}</h2>
    <p class="description">${card.cardArea}　${card.cardNo}</p>
  </div>
`;

        wrapper.appendChild(slide);
      });

      new Swiper(".swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    })
    .catch(err => console.error("載入資料失敗：", err));
}
