// CLIENT FORM ALERT (SAFE)
const form = document.getElementById("clientForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted.");
  });
}

/* HERO BACKGROUND SLIDER (SAFE + FIXED) */
document.addEventListener("DOMContentLoaded", function () {

  const hero = document.querySelector(".hero");
  if (!hero) return; // if not home page
const images = [
  "https://images.pexels.com/photos/8112197/pexels-photo-8112197.jpeg",
  "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg",
  "https://images.pexels.com/photos/14766052/pexels-photo-14766052.jpeg",
  "https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg",
  "https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg",
];


  let index = 0;

  // initial image
  hero.style.backgroundImage = `url('${images[0]}')`;

  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
  }, 5000);
});
