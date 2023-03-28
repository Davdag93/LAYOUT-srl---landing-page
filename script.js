const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const button = card.querySelector('.btn-card-front');
  const content = card.querySelector('.card-front');

  button.addEventListener('click', () => {
     cards.forEach(otherCard => {
      if (otherCard !== card) {
        const otherContent = otherCard.querySelector('.card-front');
        otherContent.classList.remove('visible');
      }
    }); 

    content.classList.toggle('visible');
  });
});