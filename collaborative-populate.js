const videos = [{
        title: "Fauré - Violin Sonata in A Major, Op. 13",
        performer1: "Gabrielle Chou, violin",
        performer2: "Ryan Soeyadi, piano",
        description: "Live at Elebash Recital Hall on December 3rd, 2019.",
        youtubeLink: "https://www.youtube.com/embed/EgaNhpeQlI4"
    },
    {
        title: "Rachmaninoff - Cello Sonata in G minor, Op. 19",
        performer1: "Sebastian Stöger, cello",
        performer2: "Ryan Soeyadi, piano",
        description: "Live at Paul Hall at The Juilliard School on November 13th, 2019 at 8pm.",
        youtubeLink: "https://www.youtube.com/embed/O3t6zwLjesc"
    },
    {
        title: "Ravel - Piano Trio in A minor",
        performer1: "Jasmine Lin, violin",
        performer2: "Sebastian Stöger, cello",
        performer3: "Ryan Soeyadi, piano",
        description: "Live at Kneisel Hall in Blue Hill, Maine in August 2019.",
        youtubeLink: "https://www.youtube.com/embed/k8i0dbg7NNo"
    },
    {
        title: "Schnyder - subZERO Concerto for Bass Trombone",
        performer1: "Filipe Pereira, bass trombone (bass trombonist of the Buffalo Philharmonic)",
        performer2: "Ryan Soeyadi, piano",
        description: "Live at Morse Hall at The Juilliard School on November 19th, 2018.",
        youtubeLink: "https://www.youtube.com/embed/DEAJ9V1w4vs"
    },
]

const videosHTML = document.querySelector('#collaborative-videos');

window.addEventListener('DOMContentLoaded', function () {
    let videoSelection = videos.map(function (video) {

        return `<div class="video-container">
        <div class="video-information">
            <div class="video-title"><h2>${video.title}</h2></div>
            <div class="video-performers extra-line-space"><p>${video.performer1}</p>
                <p>${video.performer2}
            </p></div>
            <div class="video-description extra-line-space"><p>${video.description}</p></div>
        </div>

        <div class="video extra-line-space"><iframe src="${video.youtubeLink}" width="560" height="349" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>`

    });

    videoSelection = videoSelection.join("");
    videosHTML.innerHTML = videoSelection;
});