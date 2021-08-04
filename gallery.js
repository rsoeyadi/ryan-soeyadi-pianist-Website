const images = [{
        caption: "Photographer: Jiyang Chen",
        source: "/img/gallery-img/2.jpg",
    },
    {
        caption: "Photographer: Jiyang Chen",
        source: "/img/gallery-img/3.jpg",
    },
    {
        caption: "Photographer: Jiyang Chen",
        source: "/img/gallery-img/4.jpg",
    },
    {
        caption: "Photographer: Jiyang Chen",
        source: "/img/gallery-img/5.jpg",
    },
    {
        caption: "Photographer: Jiyang Chen",
        source: "/img/gallery-img/6.jpg",
    },
    {
        caption: "Photographer: Jiyang Chen",
        source: "/img/gallery-img/7.jpg",
    },
    {
        caption: "Photographer: Jiyang Chen",
        source: "/img/gallery-img/24.jpg",
    },
    {
        caption: "With Pianist Stephen Hough after a Juilliard PianoScope masterclass on Bolcom's 'Poltergeist'",
        source: "/img/gallery-img/9.jpg",
    },
    {
        caption: "With Pianist Adam Neiman after a two-piano concert at Manchester Music Festival in Vermont",
        source: "/img/gallery-img/10.jpg",
    },
    {
        caption: "After performing one of Rachmaninoff's Études-Tableaux, Op. 33, No. 3 in C Minor for Pianist Winston Choi at Manchester Music Festival 2021",
        source: "/img/gallery-img/11.jpg",
    },
    {
        caption: "After performing Schumann's Piano Quartet with violist Toby Appel at Manchester Music Festival 2021",
        source: "/img/gallery-img/12.jpg",
    },
    {
        caption: "After performing Beethoven's 'Ghost Trio' (with one of our coaches, Evelyne Brancart) at Manchester Music Festival 2021",
        source: "/img/gallery-img/14.jpeg",
    },
    {
        caption: "With my Juilliard teacher Julian Martin, December 2017",
        source: "/img/gallery-img/17.jpg",
    },
    {
        caption: "With pianist Martin Labazevitch at the Kosciuzko Foundation in NYC, May 2018",
        source: "/img/gallery-img/18.jpg",
    },
    {
        caption: "With my Manhattan School of Music Precollege Teacher, Dr. Adam Kent, whom I studied with for 7 years",
        source: "/img/gallery-img/19.jpg",
    },
    {
        caption: "With Pianist Dr. Amy E. Gustafson after the Marian Garcia International Piano Competition in October 2018",
        source: "/img/gallery-img/21.jpg",
    },
    {
        caption: "With pianist Martin Labazevitch after the 2018 Kosciuzko Foundation Chopin Competition in Washington D.C.",
        source: "/img/gallery-img/13.jpg",
    },
    {
        caption: "With Pianist Michael Brown at Juilliard",
        source: "/img/gallery-img/15.jpg",
    },
    {
        caption: "With Melvin Stecher and Norman Horowitz after the 2018 Stecher and Horowitz New York International Piano Competition",
        source: "/img/gallery-img/16.jpg",
    }
]

const galleryHTML = document.querySelector('#gallery-container');


window.addEventListener('DOMContentLoaded', function () {
    let gallery = images.map(function (image) {

        return `<a href="${image.source}" data-lightbox="image-1" data-title="${image.caption}"><img src="${image.source} " alt="" loading="lazy"></a>`

    });

    gallery = gallery.join("");
    galleryHTML.innerHTML = gallery;
});