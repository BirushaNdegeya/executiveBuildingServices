const footer = document.querySelector('footer');
const expertContainer = document.querySelector('.exp-container');
const temoignageContainer = document.querySelector('.tem-container');

const expertData = [
	{
		src: './images/pascal-expert.jpg',
		alt: 'birusha ndegeya profile',
		title: 'Je veux aller au marche',
		nom: 'Ir pascal',
		call: '0971616131',
	},
	{
		src: './images/pascal-expert.jpg',
		alt: 'birusha ndegeya profile',
		title: 'Birusha Ndegeya',
		nom: 'Birusha Ndegeya',
		call: '0971616131',
	},
	{
		src: './images/pascal-expert.jpg',
		alt: 'birusha ndegeya profile',
		title: 'Birusha Ndegeya',
		nom: 'Birusha Ndegeya',
		call: '0971616131',
	},
	{
		src: './images/birusha-expert.png',
		alt: 'birusha ndegeya profile',
		title: 'Birusha Ndegeya',
		nom: 'Birusha Ndegeya',
		call: '0971616131',
	},
];

const temoignages = [
	{
		src: './images/client-satisfait-1.jpg',
		alt: 'client satisfait',
		nomClient: 'Hello world',
		commentaire:
			"J'ai vraiment aime la construction ca ete tres magnifique",
	},
	{
		src: './images/client-satisfait-2.jpg',
		alt: 'Client Satisfait',
		nomClient: 'Hello world',
		commentaire:
			"J'ai vraiment aime la construction. Travailler avec vous c'est s'arrurer de travailler avec une bonne equipe",
	},
	{
		src: './images/client-satisfait-3.jpg',
		alt: 'Une photo des clients satisfaits par le service ',
		nomClient: 'Hello world',
		commentaire: "J'ai vraiment aime la construction",
	},
	{
		src: './images/client-satisfait-4.jpg',
		alt: 'un client satisfait des services',
		nomClient: 'Hello world',
		commentaire: "J'ai vraiment aime la construction",
	},
];

try {
	temoignages.forEach((element) => {
		let div = document.createElement('div');
		div.classList.add('tem');
		div.innerHTML = `
        <img
            src="${element.src}"
            alt="${element.alt}" />
        <caption>
            <h3>${element.nomClient}</h3>
            <p>${element.commentaire}</p>
        </caption>
        `;
		temoignageContainer.appendChild(div);
	});
} catch {
	// I catch you guy
}

try {
	expertData.forEach((exp) => {
		let divImg = document.createElement('div');
		divImg.classList.add('img');
		divImg.innerHTML = `            
            <figure>
                <img src="${exp.src}" alt="" />
                <figcaption>
                    <p>${exp.nom}</p>
                    <p><a href="">Appellez</a></p>
                </figcaption>
            </figure>
        `;
		expertContainer.append(divImg);
	});
} catch {}

// footer

footer.innerHTML = `
    <div class="fot">
    <div class="fot-s-up">
        <p>
            Executive Building Service
        </p>
    </div>
    <div class="fot-s-down">
        <ul>
            <li>
                <a href="#"
                    ><img
                        src="./images/icon-facebook.svg"
                        alt="icon-facebook"
                /></a>
            </li>
            <li>
                <a href="#">
                    <img
                        src="./images/icon-instagram.svg"
                        alt="icon-instagram" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img
                        src="./images/icon-twitter.svg"
                        alt="icon-twitter" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img
                        src="./images/icon-youtube.svg"
                        alt="icon-youtube" />
                </a>
            </li>
        </ul>
    </div>
    </div>
    <div class="fot">
    <ul>
        <li><a href="./index.html">Page d'acceuil</a></li>
        <li><a href="#historique">Historique</a></li>
        <li><a href="#propos">A propos de Nous</a></li>
    </ul>
    </div>
    <div class="fot">
    <ul>
        <li><a href="./index.html#temoignage">Temoignages</a></li>
        <li><a href="./contact.html">Nous Contactez</a></li>
    </ul>
    <p>&copy; E.B.S - Tous les droits réservés.</p>
    </div>
`;

// user interface

console.log('Hello world');

const alert = document.querySelector('#pop-up');
const okBtn = document.querySelector('#ok');

try {
	alert.style.display = 'none';
} catch {}

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	console.log(header);
	header.classList.toggle('view', window.scrollY > 0);
});

okBtn.addEventListener('click', () => {
	alert.style.display = 'none';
});
