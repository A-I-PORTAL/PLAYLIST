document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn');
    const audio = new Audio();
    let currentTrackIndex = 0;

    // Dynamically generate the list of tracks
    const tracks = [];
    for (let i = 1; i <= 100; i++) { // Adjust the range as needed
        tracks.push(`assets/music${i}.mp3`);
    }

    audio.src = tracks[currentTrackIndex];
    audio.loop = true;
    audio.play();

    nextBtn.addEventListener('click', () => {
        audio.pause();
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        audio.src = tracks[currentTrackIndex];
        audio.play();
    });
});
