let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

document.documentElement.style.setProperty(
  '--screenWidthInPX',
  (width < 1700 ? width : 1700) + 'px'
);
document.documentElement.style.setProperty(
  '--screenWidthMobileInPX',
  (width <= 750 ? width : 775) + 'px'
);
window.onload = () => {
  window.addEventListener('resize', () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    document.documentElement.style.setProperty(
      '--screenWidthInPX',
      (width < 1700 ? width : 1700) + 'px'
    );
    document.documentElement.style.setProperty(
      '--screenWidthMobileInPX',
      (width <= 775 ? width : 775) + 'px'
    );
  });
};

fetch('./data.json')
  .then((res) => res.json())
  .then((products) => {
    let secondSlider = document.querySelector('.second-slider');
    let slider = document.querySelector('.slider');
    let testimony = '';

    if (slider !== null) {
      for (let product of products) {
        testimony += `<div class="testimony">
  <p>${product.text}</p>
  <div>${product.user}</div>
</div>`;
      }
      slider.innerHTML = testimony;
      secondSlider.innerHTML = testimony;
    }
  });

window.addEventListener('load', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const offScreenMenu = document.querySelector('.nav-mobile');
  const langSelect = document.querySelector('select');
  const enLang = document.querySelectorAll('.en');
  const frLang = document.querySelectorAll('.fr');
  const donateForm = document.getElementById('donate-form');
  const partnerForm = document.getElementById('partner-form');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active-menu');
    offScreenMenu.classList.toggle('active-menu');
  });

  langSelect.addEventListener('change', () => {
    if (langSelect.value == 'en') {
      enLang.forEach((el) => {
        el.classList.toggle('hidden');
      });

      frLang.forEach((el) => {
        el.classList.add('hidden');
      });
      if (donateForm) {
        donateForm.innerHTML = `          <div class="donation-section1-col2">
      <h2>
HOW TO MAKE A DONATION?
      </h2>
      <p>
         In order to secure the transactions and facilitate the follow-up
          of the participations, the system of donation is available only
          via BANK TRANSFER.
          <br />
          <br />
          Please fill in the fields below to receive Awlad School’s bank
          details.
        
      </p>
      <label for="name">
        <strong>Name </strong>(required) 
      </label>
      <input id="name" name="name" placeholder="Your name here" />
      <label for="email">
        <strong>Email </strong> (required) 

      </label>
      <input id="email" name="email" placeholder="Your email here" />

      <label for="donation">
        Amount you wish to donate
        </label
      ><input id="donation"  name="amount" placeholder="The amount here" />
      <div class="donation-section1-btn-mention">
      <div>
        <button id="donate-btn" disabled="" type="submit">
          COMING SOON
        </button>
        </div>
        <p>
          <i 
            >*Your contact information will remain 100% confidential and
            will not be shared or resold to any third party.</i
          >
        </p>
      </div>
    </div>`;
      }
      if (partnerForm) {
        partnerForm.innerHTML = `            <div class="partner-section1-form">
        <label for="name">
         <strong>Name </strong>(required)
        </label>
        <input id="name" name="name" placeholder="Your name here" />
        <label for="email">
         <strong>Email </strong> (required)
        </label>
        <input  id="email" name="email" placeholder="Your email here" />
        <label for="message">Your message</label>
        <textarea
        id="message"
          name="message"
          placeholder="Your message here"
          cols="30"
          rows="10"
        ></textarea>
        <div class="lottie lottie-message">
          <dotlottie-player
            src="https://lottie.host/af2920a8-3648-4ace-98bd-55c3900a296d/UEEgPWvqeA.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div class="partner-section1-btn-mention">
        <div>
          <button id="send-btn" disabled="" type="submit">SEND</button>
          </div>
          <p>
            <i
              >*Your contact information will remain 100% confidential and
                will not be shared or resold to any third party.</i
            >
          </p>
        </div>   
               </div>`;
      }
    } else {
      enLang.forEach((el) => {
        el.classList.add('hidden');
      });
      frLang.forEach((el) => {
        el.classList.toggle('hidden');
      });
      if (donateForm) {
        donateForm.innerHTML = `<div class="donation-section1-col2" >
      <h2>
    COMMENT FAIRE UN DON ?
      </h2>
      <p>
          Afin de sécuriser les transactions et faciliter le suivi des
          participations, le système de donation est disponible uniquement
          via VIREMENT BANCAIRE.<br /><br />Merci de renseigner les champs
          ci-dessous pour recevoir les coordonnées bancaires d’Awlad
          School.
        
      </p>
      <label for="name"> <strong>Nom </strong>(obligatoire) </label>
      <input id="name" name="name" placeholder="Votre nom ici" />
      <label for="email"> <strong>Email </strong> (obligatoire) </label>
      <input id="email" name="email" placeholder="Votre email ici" />

      <label for="donation"> Montant que vous souhaitez donner </label
      ><input
        id="donation"
        name="amount"
        placeholder="Votre montant ici"
      />
      <div class="donation-section1-btn-mention">
      <div>
        <button id="donate-btn" disabled="" type="submit">
          PROCHAINEMENT
        </button> 
        </div>
        <p>
          <i 
            >* Vos coordonnées resteront 100% confidentielles et ne seront
            ni partagées, ni revendues, à un tiers.</i
          >
        </p>
      </div>
    </div>`;
      }
      if (partnerForm) {
        partnerForm.innerHTML = ` <div class="partner-section1-form">
        <label for="name"> <strong>nom </strong>(obligatoire) </label>
        <input id="name" name="name" placeholder="Votre nom ici" />
        <label for="email"> <strong>Email </strong> (obligatoire) </label>
        <input id="email" name="email" placeholder="Votre email ici" />
        <label for="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message ici"
          cols="30"
          rows="10"
        ></textarea>
        <div class="lottie lottie-message">
          <dotlottie-player
            src="https://lottie.host/af2920a8-3648-4ace-98bd-55c3900a296d/UEEgPWvqeA.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div class="partner-section1-btn-mention">
        <div>
          <button id="send-btn" disabled="" type="submit">Enovoyer</button>
          </div>
          <p>
            <i
              >* Vos coordonnées resteront 100% confidentielles et ne
              seront ni partagées, ni revendues, à un tiers.</i
            >
          </p>
        </div>
      </div>`;
      }
    }
  });
});
window.addEventListener('keydown', () => {
  const userName = document.getElementById('name');
  const useremail = document.getElementById('email');
  const donation = document.getElementById('donation');
  const message = document.getElementById('message');
  const langSelect = document.querySelector('select');
  const donateBtn = document.querySelector(
    '.donation-section1-btn-mention div'
  );
  const partnerBtn = document.querySelector(
    '.partner-section1-btn-mention div'
  );
  if (partnerBtn) {
    userName.addEventListener('keyup', () => {
      if (userName.value.length > 0 && langSelect.value == 'fr') {
        partnerBtn.innerHTML =
          ' <button id="send-btn" class="enabled" type="submit"> Enovoyer</button> ';
      } else if (userName.value.length > 0 && langSelect.value == 'en') {
        partnerBtn.innerHTML =
          ' <button id="send-btn" class="enabled" type="submit"> SEND</button> ';
      }
      document.getElementById('send-btn').addEventListener('click', () => {
        console.log('clicked');
      });
    });
  }
  if (donateBtn) {
    userName.addEventListener('keyup', () => {
      if (userName.value.length > 0 && langSelect.value == 'fr') {
        donateBtn.innerHTML =
          ' <button id="donate-btn" class="enabled" type="submit"> Enovoyer</button> ';
      } else if (userName.value.length > 0 && langSelect.value == 'en') {
        donateBtn.innerHTML =
          ' <button id="donate-btn" class="enabled" type="submit"> SEND</button> ';
      }
    });
  }
});
