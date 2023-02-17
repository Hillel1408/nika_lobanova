$(document).ready(function () {
    $('.slider__slick').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

const sliderBtn = document.querySelectorAll('.slider__slick-btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupText = document.querySelector('.popup__content-text');
const priceBlock = document.querySelector('.popup__content-block');
const modalTitle = document.querySelector('.popup__content-title span');
const modalImg = document.querySelector('.popup__content-imgWrap');

const text = [
    `
        <p>Its our first step towards finding your style and building your perfect wardrobe.</p><p>First, I ask you to fill in a small questionnaire. It helps me to understand your life. After all, every person is unique. And you. You're very special, I'm telling you for sure.</p>
        <p>Armed with your questionnaire and my knowledge, and experience accumulated over the years, I'll help you find your style.</p>
        <p>In the meeting, I evaluate what you already have in your wardrobe. We analyze your body type together. And when you go to the store next time, you'll have no hesitation over cuts and styles you should pay attention to.</p>
        <p>I show you how to style what you already have in your wardrobe, create new outfits with all your clothes, and update them to look brand new.</p>
        <p>Then I prepare a list of what can be added to your wardrobe during your next shopping. Our shopping list will consist entirely of things that match everything in your wardrobe.</p>
    `,
    `
        <p>It's a perfect combo to complete your overhaul. However, the service can also go independently. First, we have a consultation, where we together determine the goals and objectives of our future shopping.</p>
        <p>Then we arrange an appointment (virtual or in-store, whichever works best for you). Afterward, we head to the amazing world of beauty and fashion. Trust me, we’ll have a great time, no matter what type of consultation you choose.</p>
        <p>The whole shopping process is highly productive because I do pre-shopping (when a stylist goes to stores to research the assortment in advance) for you on arrival. We’ll immediately go to a particular place where we can implement all our plans.</p>
        <p>Surely, I'll teach you how to add new items to your wardrobe and style what we've already bought.</p>
        <p>And no doubt, I provide all my customers with additional services. For example, feel free to text me after shopping. I'll give you advice on your wardrobe update questions.</p>
    `,
    `
        <p>Pick this option if you're eager to get the best of all possible straight away. Want to find out what clothing style suits you best? And what should you pay attention to in the stores? Want to find your unique style?</p>
        <p>LookBook is a presentation consisting of fashion tips to ensure you always look stylish, with the best silhouettes for your body type, colors, textures, and prints. It is the answer to the eternal questions: “What to wear?” and “Where to buy?”. The presentation provides all the shopping recommendations, looks, desired capsules, helping hand to choose a brand, and your fashion DNA.</p>
        <p>I won't write a paragraph: “For whom?” because I am sure, every woman needs a LookBook.</p>
        <p>As always, I provide all my customers with additional services. For example, feel free to text me after getting your presentation. I'll give you advice on presentation analysis and your wardrobe update questions.</p>
    `,
    `
        <p>Based on this principle, stylists do work with stars and celebrities. It is a comprehensive approach to creating a wardrobe that’s uniquely yours and helping your style development.</p>
        <p>The annual subscription offers 4 closet checks and 4 personal shopping sessions (for each season of the year). Thus, all the services listed above, and SMS support throughout the year on any style and personal wardrobe question.</p>
    `,
    `
        <p>Every woman requires basic clothes, so she can mix and match them with the rest of her wardrobe. Searching for the “philosopher's stone”, we're encountering TikTok and Pinterest capsules. However, they don't work.</p>
        <p>And the answer is simple — EACH GIRL HAS HER FASHION BASICS.<br>
        The basic wardrobe is completely individual and depends on different factors: lifestyle, preferences, budget, fashion style, and much more. Let's simplify your life and create your basics made up of pieces that suit you best.</p>
        <p>Your essentials will be yours only, unique and beloved.
        To create your essentials, we have a consultation, then we prepare together for the creation of your future basic wardrobe. After the session, I send comprehensive instruction, which takes into account all your features and wishes.</p>
    `,
];

const price = [
    'price: 180 USD',
    'price: 180 USD',
    'Price: 260 USD',
    'Price: 1250 USD instead of 1450 USD',
    'Стоимость: 4500 грн',
];

const title = [
    'Wardrobe overhaul virtual/in-store',
    'Personal shopping virtual/in-store',
    'PersonalLook Book',
    'Annual subscription virtual/in-store',
    'Wardrobe Capsule virtual',
];

const img = [
    `
        <img src="./img/img9.jpg" alt="">
        <img src="./img/img10.jpg" alt="">
        <img src="./img/img11.jpg" alt="">
    `,
    `
        <img src="./img/img12.jpg" alt="">
        <img src="./img/img13.jpg" alt="">
        <img src="./img/img14.jpg" alt="">
    `,
    `
        <img src="./img/img15.jpg" alt="">
        <img src="./img/img16.jpg" alt="">
        <img src="./img/img17.jpg" alt="">
    `,
    `
        <img src="./img/img18.jpg" alt="">
        <img src="./img/img19.jpg" alt="">
        <img src="./img/img20.jpg" alt="">
    `,
    `
        <img src="./img/img21.jpg" alt="">
        <img src="./img/img22.jpg" alt="">
        <img src="./img/img23.jpg" alt="">
    `,
];

sliderBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        const index = e.target.dataset.id;

        popupText.innerHTML = '';
        popupText.innerHTML = text[index];

        priceBlock.innerHTML = '';
        priceBlock.innerHTML = price[index];

        modalTitle.innerHTML = '';
        modalTitle.innerHTML = title[index];

        modalImg.innerHTML = '';
        modalImg.innerHTML = img[index];

        popup.classList.toggle('open');
        document.body.classList.toggle('lock');
    });
});

popupClose.addEventListener('click', () => {
    popup.classList.toggle('open');
    document.body.classList.toggle('lock');
});
