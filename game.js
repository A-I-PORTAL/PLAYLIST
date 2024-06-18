document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn');
    const audio = new Audio();
    let currentTrackIndex = 0;

    // Manually list your tracks
    const tracks = [
        'assets/music1.mp3',
        'assets/music2.mp3',
        'assets/music3.mp3',
        // Add more tracks as needed
    ];

    function loadTrack(index) {
        if (index < tracks.length) {
            audio.src = tracks[index];
            audio.load();
            audio.onloadeddata = () => {
                audio.play().then(() => {
                    console.log(`Playing: ${tracks[index]}`);
                }).catch(error => {
                    console.error('Playback failed', error);
                });
            };
            audio.onerror = () => {
                console.error(`Error loading track: ${tracks[index]}`);
            };
        } else {
            console.error('Track index out of range');
        }
    }

    audio.loop = true;

    nextBtn.addEventListener('click', () => {
        if (audio.paused && currentTrackIndex === 0) {
            loadTrack(currentTrackIndex);
        } else {
            audio.pause();
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            loadTrack(currentTrackIndex);
        }
    });

    loadTrack(currentTrackIndex);
});
