let index = 0, index1 = 0;

show_slide = (i) => {
    index += i;
    var images = document.getElementsByClassName("image");

    for (i = 0; i < images.length; i++)
        images[i].style.display = "none";

    if (index > images.length - 1) index = 0;
    else if (index < 0) index = images.length - 1;

    images[index].style.display = "block";
}

let index1 = 0;
show_slide1 = (j) => {
    index1 += j;
    var images1 = document.getElementsByClassName("image1");

    for (j = 0; j < images1.length; j++)
        images1[j].style.display = "none";

    if (index1 > images1.length - 1) index1 = 0;
    else if (index1 < 0) index1 = images1.length - 1;

    images1[index1].style.display = "block";
}

// setInterval(() => {
//     show_slide(index++);
// }, 3000);

window.addEventListener("onload", show_slide(index));
window.addEventListener("onload", show_slide1(index1));