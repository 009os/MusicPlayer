console.log("welcome");
let songIndex=0;
let audioElement=new Audio('mh1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let songs=[
    {songName:"Ranjis hi sahi",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"Ranjis hi sahi",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
    {songName:"",filePath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\mh1.mp3",coverPath:"C:\Users\omji\OneDrive\Desktop\HUJRE ME MEHFIL\m1.png"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})
