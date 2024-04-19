let webseries = [
  {"id": 1,
    "url": "http://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under the Dome",
    "genres": ["Drama", "Science-Fiction", "Thriller"],
    "image": "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg" ,
    "summary": "Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away."
  },
  {
    "id": 2,
    "url": "http://www.tvmaze.com/shows/2/person-of-interest",
    "name": "Person of Interest",
    "genres": ["Drama", "Action", "Crime"],
    "image": "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
    "summary": "You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered. They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you."
  },
  {
    "id": 3,
    "url": "http://www.tvmaze.com/shows/3/bitten",
    "name": "Bitten",
    "genres": ["Drama", "Horror", "Romance"],
    "image": "http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
     "summary": "Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, Bitten follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack."
  },
  {
    "id": 4,
    "url": "http://www.tvmaze.com/shows/4/arrow",
    "name": "Arrow",
    "genres": ["Drama", "Action", "Science-Fiction"],
    "image": "http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg",
    "summary": "After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime."
  },
  {
    "id": 5,
    "url": "http://www.tvmaze.com/shows/5/true-detective",
    "name": "True Detective",
    "genres": ["Drama", "Crime", "Thriller"],
    "image": "http://static.tvmaze.com/uploads/images/original_untouched/0/61.jpg",
    "summary": "Touch darkness and darkness touches you back. True Detective centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case."
  }]
  

  renderwebseries();
function renderwebseries() {
  let content = '';
  webseries.forEach((movie) => {
  movie = `<div id=${movie.id} class='movie-container'>
         <img src="${movie.image}"/>
         <div class='movie-title'>${movie.name}</div>
        <a class='movie-year' href='${movie.url}'>Link</a>
        <div class='movie-genres'>${movie.genres}</div>
    </div>`;
  
  content += movie;
})

  document.getElementById('main').innerHTML = content;
  attachEventListner();
}

function attachEventListner() {
  let webseries = document.querySelectorAll('.movie-container');
  webseries.forEach((movie) => {
    movie.addEventListener('click', (e) => {renderDetails(e.target.parentNode.id)} );
  })
}

function renderDetails(id) {
  const index = webseries.findIndex(i => i.id == id);
  let detail = '';
  detail = `<div class='movie-detail-container'>
            <img src="${webseries[index].image}"/>
            <div class='movie-detail'>
              <div class='movie-title'>${webseries[index].name}</div>
              <a class='movie-year' href='${webseries[index].url}'>Link</a>
              <div class='movie-genres'>${webseries[index].genres}</div>
              <p>${webseries[index].summary}</p>
              <button class='back'>Back</button>
            </div>
            
    </div>`;
 
  document.getElementById('main').innerHTML = detail;
  let backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', renderwebseries);
}

let logo = document.querySelector('.logo');
logo.addEventListener('click', ()=>{location.href='index.html'})