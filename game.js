document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn');
    const audio = new Audio();
    let currentTrackIndex = 0;

    // Dynamically generate the list of tracks
    const tracks = [];
    for (let i = 1; i <= 100; i++) { // Adjust the range as needed
        tracks.push(`assets/music${i}.mp3`);
    }

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

    // Add a button to initiate the first play to comply with autoplay policies
    nextBtn.addEventListener('click', () => {
        if (audio.paused && currentTrackIndex === 0) {
            loadTrack(currentTrackIndex);
        } else {
            audio.pause();
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            loadTrack(currentTrackIndex);
        }
    });
});
