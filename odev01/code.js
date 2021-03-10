/*
 * Copyright (c) 2021 Osman Incir
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program.
 * If not see http://www.gnu.org/licenses/ or write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * @author Osman Incir osmanincir.bm@gmail.com https://github.com/Phoymus
 * @version 1.0
 * Github project home page: https://github.com/Phoymus/1030520777_BS436_WebProgramlama
 */

/**
  *  Bu liste tüm kartların resim uzantılarını
  *  ve resmin sınıfını içerisinde barındırır.
  */
const img = [
    {
        src: "img1.jpg",
        class: "cat"
    },
    {
        src: "img2.jpg",
        class: "dog"
    },
    {
        src: "img2.jpg",
        class: "dog"
    }
];

let found = false;  // Kedinin bulunma durumunu temsil eder.

/**
 * Bu method kartların değiştirilmesini
 * ve sonucun ekrana gösterilmesini sağlar.
 * @param imgId
 */
const showCard = (imgId) =>{
    const index = Math.floor(Math.random()*img.length) // images listesinde rastgele resim indexi seçer.

    document.getElementById(imgId).src = img[index].src; // seçilen resim uzantısını gönderilen resim id sinin uzantısı ile değiştirir.
    document.getElementById(imgId).onclick = null;  // resimin tıklanılabilirligini kaldırır.

    if (img[index].class === "cat" && img.length  > 1){
        // Rastgele seçilen resmin kedi olması ve halen images listesinde 1 den fazla eleman olup olmadığı kontrolü.

        document.getElementById("areaId").innerHTML = "Kazandın!!! Tebrik Ederiz :) Yeni bir oyun oynamak istersen "
            +"buraya".link("index.html")+"tıklayabilirsin.";    // İçerisinde anasayfa linki olan kazanma yazısını çıktı verir.
        found = true;
    }
    img.splice(index,1); // Seçilen resmin tekrar seçilmemesi için resmi images listesinden çıkarır.

    if(img.length === 1  && !found){
        // images listesinin içerisinde sadece 1 resim kalmış ve kedi bulunmamış olup olmadıgı kontrolü.

        document.getElementById("areaId").innerHTML = "Kaybettin:( Yeni bir oyun oynamak istersen "
            +"buraya".link("index.html")+"tıklayabilirsin.";    // İçerisinde anasayfa linki olan kaybetme yazısını çıktı verir.
    }
}
