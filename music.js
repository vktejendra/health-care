// Songs object to map song names to their file paths
const songs = {
    "Another Love - Tom Odell": "music/Another Love - Tom Odell.m4a",
    "Co2 - Prateek Kuhad": "music/Co2 - Prateek Kuhad.m4a",
    "Cry For Me - The Weeknd": "music/Cry For Me - The Weeknd.m4a",
    "Die For You - The Weeknd": "music/Die For You - The Weeknd.m4a",
    "Give Me Mercy - The Weeknd": "music/Give Me Mercy - The Weeknd.m4a",
    "Hurry Up Tomorrow - The Weeknd": "music/Hurry Up Tomorrow - The Weeknd.m4a",
    "Moral of the Story - Ashe": "music/Moral of the Story - Ashe.m4a",
    "Open Hearts - The Weeknd": "music/Open Hearts - The Weeknd.m4a",
    "Blinding Lights - The Weeknd": "music/Blinding Lights - The Weeknd.m4a"
};

// Function to change the audio source and play the song
function playSong(songName) {
    console.log("Song clicked:", songName);  // Debugging line to confirm the function is triggered

    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");

    // Check if the song exists in the list
    if (songs[songName]) {
        console.log("Playing song:", songs[songName]);  // Debugging line to show the song path
        
        // Set the source of the audio to the selected song
        audioSource.src = songs[songName];

        // Reload the audio to apply the new source
        audioPlayer.load();

        // Play the selected song
        audioPlayer.play().then(() => {
            console.log("Song is now playing.");
        }).catch((error) => {
            console.log("Error while playing the song:", error);
        });
    } else {
        console.log("Song not found!");  // Debugging line if the song is not found
        alert("Song not found!");
    }
}
