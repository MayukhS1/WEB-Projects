const IMAGES = document.querySelectorAll("img");

const SIZES = {
    showcase: "100w",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
};

function generateImageSize(elementSource) {
    let markup = [];
    let width = 400;

    for (let index = 0; index < 5; index++) {
        markup[index] = elementSource + "-" + width + ".jpg " + width + "w";
        width+=400;        
    }

    return markup.join();
}

for (let index = 1; index < IMAGES.length; index++){
    let element = IMAGES[index].getAttribute("src");
    let type = IMAGES[index].getAttribute("data-type");

    element = element.slice(0,-8);
    // console.log(element);
    // console.log(type);
    let sourceSet = generateImageSize(element);
    console.log(sourceSet);
    IMAGES[index].setAttribute("srcset", sourceSet);

    let sizes = SIZES[type];
    console.log(sizes);
    IMAGES[index].setAttribute("sizes",sizes);    
}