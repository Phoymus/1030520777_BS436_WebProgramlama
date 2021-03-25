const images = [{
    src: "./images/img1.jpg",
    class: "cat"
},{
    src: "./images/img2.jpg",
    class: "dog"
},{
    src: "./images/img2.jpg",
    class: "dog"
}];

export const getRandomImages=()=>{
        const k = Math.floor(images.length*Math.random());
        const temp = [{src:"",class:""}]
        temp[{}] = images[k];
        images.splice(k,1);
        return temp[{}];

}