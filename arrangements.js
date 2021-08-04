const videos = [{
        title: "Merry-Go-Round of Life (Studio Ghibli's Howl's Moving Castle)",
        composer1: "Joe Hisaishi",
        composer2: "",
        youtubeLink: "https://www.youtube.com/embed/1dcmXqhkl64",
        storeLink: "https://www.musicnotes.com/sheetmusic/mtd.asp?ppn=MN0212659"
    },
    {
        title: "A Town With An Ocean View (Studio Ghibli's Kiki's Delivery Service",
        composer1: "Joe Hisaishi",
        composer2: "",
        youtubeLink: "https://www.youtube.com/embed/jiC_dPnSw0A",
        storeLink: "https://www.musicnotes.com/sheetmusic/mtd.asp?ppn=MN0211976"
    },
    {
        title: "Reflection (Disney's Mulan)",
        composer1: "Matthew Wilder",
        composer2: "",
        youtubeLink: "https://www.youtube.com/embed/wjKu-MFBiB0",
        storeLink: "https://www.musicnotes.com/sheetmusic/mtd.asp?ppn=MN0218183"
    }
]

const videosHTML = document.querySelector('#arrangement-videos');


window.addEventListener('DOMContentLoaded', function () {
    let videoSelection = videos.map(function (video) {

        return `<div class="video-container">
        <div class="video-information">
            <div class="video-title"><h2>${video.title}</h2></div>
            <div class="video-composers extra-line-space"><p>Composed by ${video.composer1}</p>
                <p>${video.composer2}
            </p></div>
            <div class="view-details-box">
                <p><a href="${video.storeLink}" target="__blank">Purchase this arrangement</a></p>
            </div>
        </div>

        <div class="video"><iframe src="${video.youtubeLink}" width="560" height="349" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>`

    });

    videoSelection = videoSelection.join("");
    videosHTML.innerHTML = videoSelection;
});