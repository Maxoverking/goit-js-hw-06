const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

console.log(' ');

categories.forEach(category => {
    const childrenGroup = [...category.children];
    // console.log("childrenGroup", childrenGroup);

    childrenGroup.forEach(element => {
        // console.log(element.tagName);
        if (element.tagName === 'H2') {
            console.log(`Category : ${element.textContent }`);
        }
    });
    childrenGroup.forEach(element => {
        // console.log( element.children);
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
});

//================================================================


