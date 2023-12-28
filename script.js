console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Blue Eyes", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sayad", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "King - Tu Aake Dekhle", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kabhi Jo Badal Barse", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "shaayraana", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ae Dil Hai Mushkil", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Diljit Dosanjh- Do you Know ", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tera Zikr", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Waalian", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Zaalima", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Diamond", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Diljit Dosanjh_ Born To Shine G.O.A.T", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "GAME-Sidhu Moose Wala", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "HINT-Karan Aujla", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Jugaadi Jatt -Mankirt Aulakh", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "OLD SKOOL", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "On Top", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Kaka Ji-Mankirt Aulakh", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Struggler", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Phone Maar Di", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "VAIL", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Yaar Anmulle", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Yaar Beli", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})