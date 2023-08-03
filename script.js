const prev = document.querySelector('.prev');
const playerpause = document.querySelector('.playerpause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');
const title = document.querySelector('.title');



//Songs list


const SongsList = [
  {
    path: "Numb.mp3",
    Songname: "Numb",
  },
  {
    path: "Dusk Till Dawn.mp3",
    Songname: "Dusk Till Dawn",
  },
  {
    path: "Hymn-For-The-Weekend.mp3",
    Songname: "Hymn For The weeknend",
  },
  {
    path: "Night Changes.mp3",
    Songname: "Night Changes",
  },
  {
    path: "Dooriyan.mp3",
    Songname: "Dooriyan",
  },
];


let Songs = false;

function Playsong() {
  Songs = true;
  audio.play();
  playerpause.classList.add('active');
   
  
}


function Pausesong() {
  Songs = false;
  audio.pause();
  playerpause.classList.remove('active');

}

playerpause.addEventListener('click', () => (Songs ? Pausesong() : Playsong()));

function Loadsong(SongsList) {
  title.textContent = SongsList.Songname;
  audio.src = SongsList.path;

}

let i = 0;
Loadsong(SongsList[i]);


function Prevsong() {
  i--;
  if (i < 0) {
    i = SongsList.length - 1;
  }
  Loadsong(SongsList[i]);
  Playsong();
}
prev.addEventListener('click', Prevsong);

function Nextsong() {
  i++;
  if (i > SongsList.length - 1) {
    i = 0;
  }
  Loadsong(SongsList[i]);
  Playsong();
}
next.addEventListener('click', Nextsong);
