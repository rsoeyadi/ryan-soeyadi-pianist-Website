const upcomingEvents = []

const pastEvents = [{
        title: "Manchester Music Festival - Medtner's Piano Quintet",
        date: "AUG 3, 2021, 7:30PM - 10PM EST",
        location: "Online",
        address: "930 Southern Vermont Arts Center Drive, Manchester, VT 05254",
        googleMapsLink: "https://goo.gl/maps/ifoutwNwmKyHXCBz9",
        link: "https://www.mmfvt.org/mmfevents/2021/8/1/youngartists",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Brahms, Dohnányi, Mozart, and Medtner. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/event-img/mmf.png",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/wnOTrmAOr0E?t=7473'
    },
    {
        title: "Manchester Music Festival - Beethoven's \"Ghost\" Trio",
        date: "JUL 25, 2021, 5PM - 7PM EST",
        location: "Online",
        address: "930 Southern Vermont Arts Center Drive, Manchester, VT 05254",
        googleMapsLink: "https://goo.gl/maps/ifoutwNwmKyHXCBz9",
        link: "https://www.mmfvt.org/mmfevents/2021/7/25/youngartists",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Beethoven, Bernstein, and Svendsen. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/event-img/mmf.png",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/MLQ29g6qDQ0?t=1314'
    },
    {
        title: "Manchester Music Festival - Brahms' Piano Quintet",
        date: "JUL 18, 2021, 5PM - 7PM EST",
        location: "Online",
        address: "930 Southern Vermont Arts Center Drive, Manchester, VT 05254",
        googleMapsLink: "https://goo.gl/maps/ifoutwNwmKyHXCBz9",
        link: "https://www.mmfvt.org/mmfevents/2021/7/18/youngartists",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Beach, Boulanger, and Brahms. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/event-img/mmf.png",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/hzHoBXrpods?t=3891'
    },
    {
        title: "Manchester Music Festival - Schumann's Piano Quartet",
        date: "JUL 11, 2021, 5PM - 7PM EST",
        location: "Online",
        address: "930 Southern Vermont Arts Center Drive, Manchester, VT 05254",
        googleMapsLink: "https://goo.gl/maps/ifoutwNwmKyHXCBz9",
        link: "https://www.mmfvt.org/mmfevents/2021/7/11/youngartistsmatinee",
        description: "A chamber concert as part of the Manchester Music Festival consisting of works by Dvořak, Mendelssohn, and Schumann. Tickets can be purchased to view through the MMF Digital Concert Hall.",
        image: "./img/event-img/mmf.png",
        onlineOnly: true,
        recordingExists: false,
        recordingLink: ''
    },
    {
        title: "Rising Stars - Texas State International Piano Festival",
        date: "JUN 8, 2021, 4:30PM EST",
        location: "Online",
        address: "Click below to view stream details",
        link: "https://tsipf.com/event/ryan-soeyadi-2021/?instance_id=190",
        description: "I will be exploring the music of Nikolai Medtner through two piano sonatas, Op. 30 (his so-called \"War\" sonata) and the \"Minacciosa\" (which Medtner himself called his ‘most contemporary composition’) and a few of his smaller works titled \"skazki\", or tales in Russian. Additional smaller works by Rachmaninoff, one of his closest friends and admirers.",
        image: "./img/event-img/medtner.jpg",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/GF16pHszXm4'
    },
    {
        title: "Music for Humanity - Benefit Livestream",
        date: "APR 18, 2021, 7PM EST",
        location: "Online",
        address: "Click below to view stream details",
        link: "https://www.musae.me/musicforhumanity/experiences/975/music-for?fbclid=IwAR0mXE-QBJRGA-HBZnIAFZc5Gp0mXBSZDO7vPctMQe1PadqmHQDqh8WugfM",
        description: "Maxfield Panish & Ryan Soeyadi present a benefit concert to raise funds for Music for Humanity (MFH), a non-profit that spreads music through the world with events and scholarships. Works by Johannes Brahms, Clara Schumann, and more.",
        image: "./img/event-img/ryan-maxfield.png",
        onlineOnly: true
    },
    {
        title: "The Juilliard School - B.M. Graduation Recital",
        date: "JAN 12, 2020, 5PM EST",
        location: "New York, NY",
        address: "60 Lincoln Center Plaza, New York, NY 10023",
        googleMapsLink: "https://www.google.com/maps/place/60+Lincoln+Center+Plaza,+New+York,+NY+10023/@40.772147,-73.9851234,17z/data=!4m2!3m1!1s0x89c2585f0e7ca543:0xb016be659bd885b0",
        address: "Click below to view stream details",
        link: null,
        description: "As partial fulfillment for the requirements of the Bachelor of Music Degree, I will be giving a solo recital featuring works by Bach, Beethoven, Chopin, R.A. Alejandro, and Medtner.",
        image: "./img/event-img/senior-recital.jpg",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: ''
    },
    {
        title: "Bach and Rachmaninoff: The Intellectual and The Romantic",
        date: "DEC 12, 2020, 6PM EST",
        location: "New York, NY",
        address: "Click below to view stream details",
        link: "https://www.groupmuse.com/events/11162-bach-and-rachmaninoff-the-intellectual-and-the-romantic",
        description: "A Groupmuse livestream alongside pianist Siyumeng Wang, featuring works by Bach and Rachmaninoff. Additionally, there will be recitations of original translations of Russian poetry by Ulkar Aghayeva to enhance the listening experience of the Rachmaninoff.",
        image: "./img/event-img/ryan-siyumeng.jpg",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/ezTPb-PGbvg'
    },
    {
        title: "Piano Evenings with David Dubal",
        date: "DEC 08, 2020, 7PM EST",
        location: "New York, NY",
        address: "Click below to view stream details",
        link: "https://www.pianoevenings.com/november-24",
        description: "A class hosted and instructed by David Dubal, who will provide historical and musical context for the week's repertoire selections, performed by a rotating lineup of acclaimed young pianists. Each pianist will play for around twenty minutes. Program will include works by Albéniz, R.A. Alejandro, and Medtner.",
        image: "./img/event-img/dubal.jpg",
        onlineOnly: true
    },
    {
        title: "The Troubled Romantic",
        date: "OCT 03, 2020, 8PM EST",
        location: "New York, NY",
        address: "Click below to view stream details",
        link: "https://www.groupmuse.com/events/10994-the-troubled-romantic",
        description: "A Groupmuse Livestream with fellow pianist Siyumeng Wang including works by Beethoven, Fauré, and Rachmaninoff.",
        image: "./img/event-img/ryan-siyumeng-2.jpg",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/FTh4oAY41q8'
    },
    {
        title: "Another Night of Piano Gems with Ryan Soeyadi",
        date: "AUG 12, 2020, 7PM",
        location: "New York, NY",
        address: "Click below to view stream details",
        link: "https://www.groupmuse.com/events/10875-another-night-of-piano-gems-with-ryan-soeyadi",
        description: "A solo Groupmuse Livestream including works by R.A. Alejandro, Kapustin, Liszt, and more.",
        image: "./img/event-img/livestream.jpg",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/YJvJx8wZx-0'
    },
    {
        title: "Piano Gems with Ryan Soeyadi",
        date: "MAY 27, 2020, 8PM EST",
        location: "New York, NY",
        address: "Click below to view stream details",
        link: "https://www.groupmuse.com/events/10647-piano-gems-with-ryan-soeyadi",
        description: "Groupmuse Livestream including works by Chopin, Debussy, Tchaikovsky, and more.",
        image: "./img/event-img/livestream2.jpg",
        onlineOnly: true,
        recordingExists: true,
        recordingLink: 'https://youtu.be/Opx5KuK6n4w'
    },
    {
        title: "Solo Recital: Young Masters Recital Series at Valley Cottage Library",
        date: "APR 26, 2020, 3PM EST",
        location: "Valley Cottage, NY",
        address: "110 NY-303, Valley Cottage, NY 10989",
        googleMapsLink: "https://goo.gl/maps/U3TpzS56VLL7FP9s9",
        link: null,
        description: "Works by Mozart, Chopin, Medtner, and more. Presented by the Young Masters Recital Series.",
        image: "./img/event-img/house-concert.jpg",
        onlineOnly: false
    },
    {
        title: "Solo Recital: Downtown Music at Grace",
        date: "APR 22, 2020, 12PM EST",
        location: "New York, NY",
        address: "33 Church St, White Plains, NY 10601",
        link: "https://artswestchester.org/events/pianist-ryan-soeyadi-in-free-concert/",
        googleMapsLink: "https://goo.gl/maps/hB2LEzC4NkK2haeFA",
        description: "Works by Mozart, Chopin, and Medtner. This free concert at DTM’s weekly series of free concerts at noon is presented in partnership with the Stecher and Horowitz Foundation.",
        image: "./img/event-img/nyipc.jpg",
        onlineOnly: false
    },
    {
        title: "Rachmaninoff, Kreisler, and more (House Concert)",
        date: "MAR 11, 2020, 6:30PM – 8:30PM EST",
        address: "",
        location: "New York, NY",
        googleMapsLink: "https://goo.gl/maps/R514NEyRo5xEp58QA",
        link: null,
        description: "Come enjoy a house recital on a Wednesday evening! Works by Rachmaninoff, Kreisler, and more, played by cellist Sebastian Stöger and Ryan Soeyadi.",
        image: "./img/event-img/ryan-sebastian.jpg",
        onlineOnly: false
    },
];

const upcomingEventsHTML = document.querySelector('.upcoming-concerts');
const pastEventsHTML = document.querySelector('.past-concerts');

window.addEventListener('DOMContentLoaded', function () {
    let upcoming = upcomingEvents.map(function (event) {

        if (event.link == null) {

            return `<div class="event-container">
    
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <div class="event-info">
            <div class="info-container">

                <h2 class="event-title">${event.title}</h2>
            
                <div class="date-time-container">
                    <p class="date-time">${event.date}</p>
                </div>
            
                <p class="event-city">${event.location}</p>
            
                <p class="event-address">${event.address}</p>
                <p class="map" target="__blank"><a
                        href="${event.googleMapsLink}">(MAP)</a>
                </p>
            </div
            </div>
            </div>
            </div>
            `

        } else if (event.onlineOnly) {
            return `<div class="event-container">
    
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <div class="event-info">
        <div class="info-container">

            <h2 class="event-title">${event.title}</h2>
        
            <div class="date-time-container">
                <p class="date-time">${event.date}</p>
            </div>
        
            <p class="event-city">${event.location}</p>
        
            <p class="event-address">${event.address}</p>

        
            <div class="view-details-box">
                <p><a href="${event.link}" target="__blank">View Details</a></p>
            </div>
            </div>
        </div>
        </div>
        </div>
        
        
        `
        } else {
            return `<div class="event-container">
        
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <div class="event-info">
            <div class="info-container">

                <h2 class="event-title">${event.title}</h2>
            
                <div class="date-time-container">
                    <p class="date-time">${event.date}</p>
                </div>
            
                <p class="event-city">${event.location}</p>
            
                <p class="event-address">${event.address}</p>
                <p class="map"><a
                        href="${event.googleMapsLink}" target="__blank">(MAP)</a>
                </p>
            
                <div class="view-details-box">
                    <p><a href="${event.link}">View Details</a></p>
                </div>
                
                
                </div>
            </div>
            </div>
            </div>
            
            
            `
        }
    });

    let past = pastEvents.map(function (event) {

        if (event.link == null) {

            return `<div class="event-container">
    
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <div class="event-info">
            <div class="info-container">

                <h2 class="event-title">${event.title}</h2>
            
                <div class="date-time-container">
                    <p class="date-time">${event.date}</p>
                </div>
            
                <p class="event-city">${event.location}</p>
            
                <p class="event-address">${event.address}</p>
                <p class="map" target="__blank"><a
                        href="${event.googleMapsLink}">(MAP)</a>
                </p>
            </div>
            </div>
            </div>
            </div>
            `

        } else if (event.onlineOnly && event.recordingExists) {
            return `<div class="event-container">
    
        <img src="${event.image}" alt="Manchester Music Festival Logo">
        <div class="event-info">
        <div class="info-container">

            <h2 class="event-title">${event.title}</h2>
        
            <div class="date-time-container">
                <p class="date-time">${event.date}</p>
            </div>
        
            <p class="event-city">${event.location}</p>
        
            <p class="event-address">${event.address}</p>

        
            <div class="view-details-box">
                <p><a href="${event.link}" target="__blank">View Details</a></p>
            </div>
            <div class="recording-box">
                <p><a href="${event.recordingLink}" target="__blank">Watch Recording</a></p>
            </div>
            
            </div>
        </div>
        </div>
        </div>
        
        
        `
        } else {
            return `<div class="event-container">
        
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <div class="event-info">
            <div class="info-container">
                <h2 class="event-title">${event.title}</h2>
            
                <div class="date-time-container">
                    <p class="date-time">${event.date}</p>
                </div>
            
                <p class="event-city">${event.location}</p>
            
                <p class="event-address">${event.address}</p>
                <p class="map"><a
                        href="${event.googleMapsLink}" target="__blank">(MAP)</a>
                </p>
            
                <div class="view-details-box">
                    <p><a href="${event.link}" target="__blank">View Details</a></p>
                    
                </div>

                
                </div>
            </div>
            </div>
            </div>
            
            
            `
        }
    });

    upcoming = upcoming.join("");
    past = past.join("");
    upcomingEventsHTML.innerHTML = upcoming;
    pastEventsHTML.innerHTML = past;

});