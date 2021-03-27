/**
 *  Bu liste tüm kartların resim uzantılarını
 *  ve resmin sınıfını içerisinde barındırır.
 */
export const imgs = [
    {
        src: "./images/img1.jpg",
        class: "cat"
    },
    {
        src: "./images/img2.jpg",
        class: "dog"
    },
    {
        src: "./images/img2.jpg",
        class: "dog"
    }
];

export const getRandomImages=()=>{

    const k = Math.floor(imgs.length*Math.random());
    const temp = imgs[k];
    imgs.splice(k,1);
    return temp;


}