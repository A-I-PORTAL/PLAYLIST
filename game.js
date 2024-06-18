document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn');
    const tracks = [
        'assets/music1.mp3',
        'assets/music2.mp3',
        'assets/music3.mp3'
        // Add more tracks here as needed
    ];
    let currentTrackIndex = 0;

    const audio = new Audio();
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
