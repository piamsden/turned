const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('s');

const videoSettings = '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&enablejsapi=1&amp;';
let video = new Array();

//higher
video.push({
    video_id: '_En6c_PKQ-Q',
    video_name: "Odetari - GOOD LOYAL THOTS (Lyrics)",
    id: '_En6c_PKQ-Q' + videoSettings + 'start=0',
    note: '🔊 Odetari - GOOD LOYAL THOTS (Lyrics)',
    volume: 35,
});
let randVid = songId && songId >= 0 && songId < video.length ? songId : Math.floor(video.length * Math.random());