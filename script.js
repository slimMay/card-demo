const data = [
  { name: "小明", area: "高雄區", no: "1", img: "https://i.imgur.com/ZcLLrkY.jpg" },
  { name: "小華", area: "台北區", no: "2", img: "https://i.imgur.com/qIufhof.jpg" }
];

function showInfo() {
  const wrapper = document.getElementById("cardWrapper");
  data.forEach(card => {
    const slide = document.createElement("div");
    slide.className = "card swiper-slide";
    slide.innerHTML = `
      <img class="card-img" src="${card.img}" alt="">
      <div class="card-content">
        <h2 class="name">${card.name}</h2>
        <p class="description">${card.area}　${card.no}</p>
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
}
