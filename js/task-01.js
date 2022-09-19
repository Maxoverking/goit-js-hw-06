//Variant 1

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
console.log(' ');
categories.forEach(category => {
    const group = [...category.children];
    // console.log(group);

    group.forEach(element => {
        // console.log(element);
        if (element.tagName === 'H2') {
            console.log(`Category : ${element.textContent}`);
        }
    });
    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
});


//================================================================
//Variant 2


// const numberOfCategory = document.querySelectorAll('.item');
// console.log('Number of categories:', numberOfCategory.length);

// // console.log('Number of categories:', numberOfCategory);
// const category = document.querySelectorAll('h2');

// const el_1 = numberOfCategory[0].querySelectorAll('li');
// console.log("Category :", category[0].textContent);
// console.log("Elements:", el_1.length);

// const el_2 = numberOfCategory[1].querySelectorAll('li');
// console.log("Category :", category[1].textContent);
// console.log("Elements:", el_2.length);

// const el_3 = numberOfCategory[2].querySelectorAll('li');
// console.log("Category :", category[2].textContent);
// console.log("Elements:", el_3.length);
//===============================================================

// const categoriesArray = [...numberOfCategory].map(elem => 
//     `Category : ${elem.children[0].textContent}
// Elements: ${elem.children[1].children.length}`).join('\n');
// console.log(categoriesArray);

//===============================================================

// const numberOfCategory = document.querySelectorAll(".item");

// console.log('Number of categories:', numberOfCategory.length);
// console.log(' ');

// const categoriesArray = [...numberOfCategory].map(elem => elem.children[0].textContent);
// // console.log(categoriesArray);

// const elementsArray = [...numberOfCategory].map(elem => elem.children[1].children.length);

// console.log("Category :",categoriesArray[0]);
// console.log(`Elements: `, elementsArray[0] );
// console.log(' ');
// console.log("Category :",categoriesArray[1]);
// console.log(`Elements: `, elementsArray[1] );
// console.log(' ');
// console.log("Category :",categoriesArray[2]);
// console.log(`Elements: `, elementsArray[2] );