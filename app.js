const stars = document.getElementById('stars');

if (stars) {
     function createStars(type, quantity) {
          for (let i = 0; i < quantity; i++) {
               var star = document.createElement('div');
               star.classList.add('star', `type-${type}`);
               star.style.left = `${randomNumber(1, 99)}%`;
               star.style.bottom = `${randomNumber(1, 99)}%`;
               star.style.animationDuration = `${randomNumber(65, 230)}s`;
               document.body.appendChild(star);
          }
     }

     function randomNumber(min, max) {
          return Math.floor(Math.random() * max) + min;
     }

     createStars(1, 100);
     createStars(2, 80);
     createStars(3, 70);
}

