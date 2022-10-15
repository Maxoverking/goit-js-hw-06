const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Coздаем доступ к ul галереи 
const galleryEl = document.querySelector('.gallery');
// console.log("galleryRef: ", galleryRef);

//Использую `шаблонные строки` метод мап и деструктуризацию для массива обьектов
const allImagesValues = images.map(({url , alt }) => 
`<li><img style ='border-radius: 12px' src="${url}" alt="${alt}" width = 250 height = 200></li>`).join('');
  // console.log("allRefsImages : ", allRefsImages);

  //В ul с классом добавляю все `шаблонные строки` которые вернул мап
galleryEl.insertAdjacentHTML("afterbegin", allImagesValues);

// Добавляю стили  
galleryEl.setAttribute("style", "list-style-type:none; display: flex; justify-content: space-evenly;");

