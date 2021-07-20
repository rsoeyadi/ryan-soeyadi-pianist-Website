const upcomingConcerts = [
    {
        id: 3,
        title: "Manchester Music Festival - Beethoven's \"Ghost\" Trio",
        date: "July 25, 2021, 5:00 PM EST",
        location: "Online",
        link: "https://www.mmfvt.org/mmfevents/2021/7/25/youngartists",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Beethoven, Bernstein, and Svendsen. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/concerts-img/event-img-012.jpg",
    },
    {
        id: 4,
        title: "Manchester Music Festival - Medtner's Piano Quintet",
        date: "August 1, 2021, 5:00 PM EST",
        location: "Online",
        link: "https://www.mmfvt.org/mmfevents/2021/8/1/youngartists",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Brahms, Dohnányi, Mozart, and Medtner. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/concerts-img/event-img-012.jpg",
    },
]

const pastConcerts = [
    {
        id: 1,
        title: "Manchester Music Festival - Brahms' Piano Quintet",
        date: "July 18, 2021, 5:00 PM EST",
        location: "Online",
        link: "https://www.mmfvt.org/mmfevents/2021/7/18/youngartistsmatinee",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Beach, Boulanger, and Brahms. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/concerts-img/event-img-012.jpg",
    },
    {
        id: 2,
        title: "Manchester Music Festival - Schumann's Piano Quartet",
        date: "July 11, 2021, 5:00 PM EST",
        location: "Online",
        link: "https://www.mmfvt.org/mmfevents/2021/7/11/youngartistsmatinee",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Dvořak, Mendelssohn, and Schumann. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/concerts-img/event-img-012.jpg",
    },
    {
        id: 3,
        title: "Rising Stars - Texas State International Piano Festival",
        date: "June 8, 2021, 4:30 PM EST",
        location: "Online",
        link: "https://tsipf.com/event/ryan-soeyadi-2021/?instance_id=190",
        description: "I will be exploring the music of Nikolai Medtner through two piano sonatas, Op. 30 (his so-called \"War\" sonata) and the \"Minacciosa\" (which Medtner himself called his ‘most contemporary composition’) and a few of his smaller works titled \"skazki\", or tales in Russian. Additional smaller works by Rachmaninoff, one of his closest friends and admirers.",
        image: "./img/concerts-img/event-img-011.jpg",
    },
    {
        id: 4,
        title: "Music for Humanity - Benefit Livestream",
        date: "April 18, 2021, 7:00 PM EST",
        location: "Online",
        link: "https://www.musae.me/musicforhumanity/experiences/975/music-for?fbclid=IwAR0mXE-QBJRGA-HBZnIAFZc5Gp0mXBSZDO7vPctMQe1PadqmHQDqh8WugfM",
        description: "Maxfield Panish & Ryan Soeyadi present a benefit concert to raise funds for Music for Humanity (MFH), a non-profit that spreads music through the world with events and scholarships. Works by Johannes Brahms, Clara Schumann, and more.",
        image: "./img/concerts-img/event-img-010.png",
    },
    {
        id: 5,
        title: "The Juilliard School - B.M. Graduation Recital",
        date: "January 12, 2020, 5:00 PM EST",
        location: "New York, NY",
        link: null,
        description: "As partial fulfillment for the requirements of the Bachelor of Music Degree, I will be giving a solo recital featuring works by Bach, Beethoven, Chopin, R.A. Alejandro, and Medtner.",
        image: "img/concerts-img/event-img-001.jpg"
    },
    {
        id: 6,
        title: "Bach and Rachmaninoff: The Intellectual and The Romantic",
        date: "Dec 12, 2020, 6:00 PM EST",
        location: "New York, NY",
        link: "https://www.groupmuse.com/events/11162-bach-and-rachmaninoff-the-intellectual-and-the-romantic",
        description: "A Groupmuse livestream alongside pianist Siyumeng Wang, featuring works by Bach and Rachmaninoff. Additionally, there will be recitations of original translations of Russian poetry by Ulkar Aghayeva to enhance the listening experience of the Rachmaninoff.",
        image: "./img/concerts-img/event-img-002.jpg"
    },
    {
        id: 7,
        title: "Piano Evenings with David Dubal",
        date: "Dec 08, 2020, 7:00 PM EST",
        location: "New York, NY",
        link: "https://www.pianoevenings.com/november-24",
        description: "A class hosted and instructed by David Dubal, who will provide historical and musical context for the week's repertoire selections, performed by a rotating lineup of acclaimed young pianists. Each pianist will play for around twenty minutes. Program will include works by Albéniz, R.A. Alejandro, and Medtner.",
        image: "./img/concerts-img/event-img-003.jpg"
    },
    {
        id: 8,
        title: "The Troubled Romantic",
        date: "Oct 03, 2020, 8:00 PM EST",
        location: "New York, NY",
        link: "https://www.groupmuse.com/events/10994-the-troubled-romantic",
        description: "A Groupmuse Livestream with fellow pianist Siyumeng Wang including works by Beethoven, Fauré, and Rachmaninoff.",
        image: "./img/concerts-img/event-img-004.jpg"
    },
    {
        id: 9,
        title: "Another Night of Piano Gems with Ryan Soeyadi",
        date: "Aug 12, 2020, 7:00 PM",
        location: "New York, NY",
        link: "https://www.groupmuse.com/events/10875-another-night-of-piano-gems-with-ryan-soeyadi",
        description: "A solo Groupmuse Livestream including works by R.A. Alejandro, Kapustin, Liszt, and more.",
        image: "./img/concerts-img/event-img-005.jpg"
    },
    {
        id: 10,
        title: "Piano Gems with Ryan Soeyadi",
        date: "May 27, 2020, 8:00 PM EST",
        location: "New York, NY",
        link: "https://www.groupmuse.com/events/10647-piano-gems-with-ryan-soeyadi",
        description: "Groupmuse Livestream including works by Chopin, Debussy, Tchaikovsky, and more.",
        image: "./img/concerts-img/event-img-006.jpg"
    },
    {
        id: 11,
        title: "Solo Recital: Young Masters Recital Series at Valley Cottage Library",
        date: "Apr 26, 2020, 3:00 PM EST",
        location: "Valley Cottage, NY",
        link: null,
        description: "Works by Mozart, Chopin, Medtner, and more. Presented by the Young Masters Recital Series.",
        image: "./img/concerts-img/event-img-007.jpg"
    },
    {
        id: 12,
        title: "Solo Recital: Downtown Music at Grace",
        date: "Apr 22, 2020, 12:00 PM EST",
        location: "New York, NY",
        link: "https://artswestchester.org/events/pianist-ryan-soeyadi-in-free-concert/",
        description: "Works by Mozart, Chopin, and Medtner. This free concert at DTM’s weekly series of free concerts at noon is presented in partnership with the Stecher and Horowitz Foundation.",
        image: "./img/concerts-img/event-img-008.jpg"
    },
    {
        id: 13,
        title: "Rachmaninoff, Kreisler, and more (House Concert)",
        date: "Mar 11, 2020, 6:30 PM – 8:30 PM EST",
        location: "New York, NY",
        link: null,
        description: "Come enjoy a house recital on a Wednesday evening! Works by Rachmaninoff, Kreisler, and more, played by cellist Sebastian Stöger and Ryan Soeyadi.",
        image: "./img/concerts-img/event-img-009.jpg"
    },
];

const upcomingConcertsHTML = document.querySelector('.upcoming-concerts');
const pastConcertsHTML = document.querySelector('.past-concerts');

window.addEventListener('DOMContentLoaded', function() {
    let upcomingEvents = upcomingConcerts.map(function(event) {

    if (event.link == null) {
       
        return `<div class="event-wrapper">
    <div class="event">
        <h2 class="event-title">${event.title}</h2>
            <div class="logistics">
                <p class="event-date">${event.date}</p>
                <p class="event-location">${event.location}</p>
            </div>
            
            <p class="event-description">${event.description}</p>
    </div>
    
    <img src="${event.image}" loading="lazy" alt="Ryan Soeyadi Headshot">
</div>
<hr>`
    } else {
    return `<div class="event-wrapper">
    <div class="event">
        <h2 class="event-title">${event.title}</h2>
            <div class="logistics">
                <p class="event-date">${event.date}</p>
                <p class="event-location">${event.location}</p>
                <div class="link"><a href="${event.link}" target="_blank">View Details</a></div>
            </div>
            
            <p class="event-description">${event.description}</p>
    </div>
    
    <img src="${event.image}" loading="lazy" alt="Ryan Soeyadi Headshot">
</div>
<hr>` }
    });

    upcomingEvents = upcomingEvents.join("");
    upcomingConcertsHTML.innerHTML = upcomingEvents;

});

window.addEventListener('DOMContentLoaded', function() {
    let finishedEvents = pastConcerts.map(function(event) {

        if (event.link == null) {
       
            return `<div class="event-wrapper">
        <div class="event">
            <h2 class="event-title">${event.title}</h2>
                <div class="logistics">
                    <p class="event-date">${event.date}</p>
                    <p class="event-location">${event.location}</p>
                </div>
                
                <p class="event-description">${event.description}</p>
        </div>
        
        <img src="${event.image}" loading="lazy" alt="Ryan Soeyadi Headshot">
    </div>
    <hr>`
        } else {
    return `<div class="event-wrapper">
    <div class="event">
        <h2 class="event-title">${event.title}</h2>
            <div class="logistics">
                <p class="event-date">${event.date}</p>
                <p class="event-location">${event.location}</p>
                <div class="link"><a href="${event.link}" target="_blank">View Details</a></div>
            </div>
            
            <p class="event-description">${event.description}</p>
    </div>
    
    <img src="${event.image}" loading="lazy" alt="Ryan Soeyadi Headshot">
</div>
<hr>`}
    });

   
    finishedEvents = finishedEvents.join("");
    pastConcertsHTML.innerHTML = finishedEvents;

});