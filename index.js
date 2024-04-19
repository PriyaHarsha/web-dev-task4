let webseries = [
  {"id": 1,
    "year": 2020,
    "title": "Under the Dome",
    "genres": ["Drama", "Science-Fiction", "Thriller"],
    "thumbnail": "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg" ,
    "extract": "Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away."
  },
  {
    "id": 2,
    "year": 2023,
    "title": "Person of Interest",
    "genres": ["Drama", "Action", "Crime"],
    "thumbnail": "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
    "extract": "You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered. They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you."
  },
  {
    "id": 3,
    "year": 2021,
    "title": "Bitten",
    "genres": ["Drama", "Horror", "Romance"],
    "thumbnail": "http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
     "extract": "Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, Bitten follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack."
  },
  {
    "id": 4,
    "year": 2019,
    "title": "Arrow",
    "genres": ["Drama", "Action", "Science-Fiction"],
    "thumbnail": "http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg",
    "extract": "After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime."
  },
  {
    "id": 5,
    "year": 2016,
    "title": "True Detective",
    "genres": ["Drama", "Crime", "Thriller"],
    "thumbnail": "http://static.tvmaze.com/uploads/images/original_untouched/0/61.jpg",
    "extract": "Touch darkness and darkness touches you back. True Detective centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case."
  }]
  

  let movies= [
  {
    "id": 1,
    "title": "The Grudge",
    "year": 2020,
    "cast": [
      "Andrea Riseborough",
      "Demián Bichir",
      "John Cho",
      "Betty Gilpin",
      "Lin Shaye",
      "Jacki Weaver"
    ],
    "genres": [
      "Horror",
      "Supernatural"
    ],
    "href": "The_Grudge_(2020_film)",
    "extract": "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
    "thumbnail_width": 220,
    "thumbnail_height": 326
  },
  {
    "id": 2,
    "title": "Underwater",
    "year": 2020,
    "cast": [
      "Kristen Stewart",
      "Vincent Cassel",
      "Jessica Henwick",
      "John Gallagher Jr.",
      "Mamoudou Athie",
      "T.J. Miller"
    ],
    "genres": [
      "Action",
      "Horror"
    ],
    "href": "Underwater_(film)",
    "extract": "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
    "thumbnail_width": 250,
    "thumbnail_height": 398
  },
  {
    "id": 3,
    "title": "Like a Boss",
    "year": 2020,
    "cast": [
      "Tiffany Haddish",
      "Rose Byrne",
      "Salma Hayek",
      "Jennifer Coolidge",
      "Billy Porter"
    ],
    "genres": [
      "Comedy"
    ],
    "href": "Like_a_Boss_(film)",
    "extract": "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
    "thumbnail_width": 259,
    "thumbnail_height": 383
  },
  {
    "title": "Three Christs",
    "year": 2020,
    "cast": [
      "Richard Gere",
      "Peter Dinklage",
      "Walton Goggins",
      "Bradley Whitford"
    ],
    "genres": [
      "Drama"
    ],
    "href": "Three_Christs",
    "extract": "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti. It screened in the Gala Presentations section at the 2017 Toronto International Film Festival. The film is also known as: Three Christs of Ypsilanti, The Three Christs of Ypsilanti, Three Christs of Santa Monica, and The Three Christs of Santa Monica.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
    "thumbnail_width": 259,
    "thumbnail_height": 383
  },
  {
    "id": 4,
    "title": "Inherit the Viper",
    "year": 2020,
    "cast": [
      "Josh Hartnett",
      "Margarita Levieva",
      "Chandler Riggs",
      "Bruce Dern",
      "Owen Teague"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "href": "Inherit_the_Viper",
    "extract": "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
    "thumbnail_width": 236,
    "thumbnail_height": 350
  },
  {
    "id": 5,
    "title": "The Sonata",
    "year": 2020,
    "cast": [
      "Freya Tingley",
      "Simon Abkarian",
      "Rutger Hauer",
      "James Faulkner"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "href": "The_Sonata_(film)",
    "extract": "The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond, from a screenplay by Desmond and Arthur Morin. It stars Freya Tingley, Simon Abkarian, James Faulkner, Rutger Hauer, Matt Barber and James Kermack. It was released in the United States on January 10, 2020, by Screen Media Films. It grossed $146,595 at the box office and received mixed reviews from critics.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
    "thumbnail_width": 246,
    "thumbnail_height": 350
  },
  {
    "id": 6,
    "title": "Bad Boys for Life",
    "year": 2020,
    "cast": [
      "Will Smith",
      "Martin Lawrence",
      "Vanessa Hudgens",
      "Alexander Ludwig",
      "Charles Melton",
      "Paola Núñez",
      "Kate del Castillo",
      "Nicky Jam",
      "Joe Pantoliano"
    ],
    "genres": [
      "Action",
      "Comedy"
    ],
    "href": "Bad_Boys_for_Life",
    "extract": "Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
    "thumbnail_width": 219,
    "thumbnail_height": 325
  },
  {
    "id": 7,
    "title": "Dolittle",
    "year": 2020,
    "cast": [
      "Robert Downey Jr.",
      "Antonio Banderas",
      "Michael Sheen",
      "Emma Thompson",
      "Rami Malek",
      "John Cena",
      "Kumail Nanjiani",
      "Octavia Spencer",
      "Tom Holland",
      "Craig Robinson",
      "Ralph Fiennes",
      "Selena Gomez",
      "Marion Cotillard"
    ],
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "href": "Dolittle_(film)",
    "extract": "Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd. Dolittle is based on the title character created by Hugh Lofting and is primarily inspired by the author's second Doctor Dolittle book, The Voyages of Doctor Dolittle (1922). Robert Downey Jr. stars as the title character, alongside Antonio Banderas and Michael Sheen in live-action roles, with Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, and Marion Cotillard voicing an array of creatures.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
    "thumbnail_width": 220,
    "thumbnail_height": 326
  },
  {
    "id": 8,
    "title": "A Fall from Grace",
    "year": 2020,
    "cast": [
      "Crystal R. Fox",
      "Phylicia Rashad",
      "Bresha Webb",
      "Mehcad Brooks",
      "Cicely Tyson",
      "Tyler Perry"
    ],
    "genres": [
      "Thriller"
    ],
    "href": "A_Fall_from_Grace",
    "extract": "A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
    "thumbnail_width": 259,
    "thumbnail_height": 383
  },
  {
    "id": 9,
    "title": "The Gentlemen",
    "year": 2020,
    "cast": [
      "Matthew McConaughey",
      "Charlie Hunnam",
      "Henry Golding",
      "Michelle Dockery",
      "Jeremy Strong",
      "Eddie Marsan",
      "Colin Farrell",
      "Hugh Grant"
    ],
    "genres": [
      "Action",
      "Comedy"
    ],
    "href": "The_Gentlemen_(2019_film)",
    "extract": "The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg",
    "thumbnail_width": 259,
    "thumbnail_height": 383
  },
  {
    "id": 10,
    "title": "The Turning",
    "year": 2020,
    "cast": [
      "Mackenzie Davis",
      "Finn Wolfhard",
      "Brooklynn Prince",
      "Joely Richardson"
    ],
    "genres": [
      "Horror",
      "Supernatural"
    ],
    "href": "The_Turning_(2020_film)",
    "extract": "The Turning is a 2020 American gothic supernatural horror film directed by Floria Sigismondi and written by Carey W. Hayes and Chad Hayes. It is a modern adaptation of the 1898 ghost story The Turn of the Screw by Henry James. It stars Mackenzie Davis, Finn Wolfhard, Brooklynn Prince, and Joely Richardson, and follows a young governess in 1994 who is hired to watch over two children after their parents are killed.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Turning_poster_2020.jpg",
    "thumbnail_width": 251,
    "thumbnail_height": 397
  }]

let menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => render(e.target.innerText));
  
function render(input) {
  let type = [];
  
  if (input == 'Movies') {
    type = movies;
  } else if (input == 'Webseries') {
    type = webseries;
  }else {
    type = input;
  }
  let content = '';
  console.log(type)
  if (type.length === 0) {
    content = '<div><h1>No results found</h1></div>';
  } else {
    type.forEach((movie) => {
    movie = `<div id=${movie.id} class='movie-container'>
         <img src="${movie.thumbnail}"/>
         <div class='movie-title'>${movie.title}</div>
        <div class='movie-year'>${movie.year}</div>
        <div class='movie-genres'>${movie.genres}</div>
    </div>`;
  
  content += movie;
})
  }
  console.log(content)
  document.getElementById('main').innerHTML = content;
  attachEventListner(input);
}

function attachEventListner(input) {
  let elements = document.querySelectorAll('.movie-container');
 elements.forEach((e) => {
    e.addEventListener('click', (e) => {renderDetails(e.target.parentNode.id, input)} );
  })
}

function renderDetails(id, input) {
  let type = [];
  let index = -1;
  if (input === 'Movies') {
    index = movies.findIndex(i => i.id == id);
    type = movies;
    
  } else {
    index = webseries.findIndex(i => i.id == id);
    type = webseries;
    
  }
 
  let detail = '';
  detail = `<div class='movie-detail-container'>
            <img src="${type[index].thumbnail}"/>
            <div class='movie-detail'>
              <div class='movie-title'>${type[index].title}</div>
              <a class='movie-year' href='${type[index].year}'>Link</a>
              <div class='movie-genres'>${type[index].genres}</div>
              <p>${type[index].extract}</p>
              <button class='back'>Back</button>
            </div>
    </div>`;
 
  let main = document.getElementById('main');
  
  main.innerHTML = '';
  main.innerHTML = detail;
  let backBtn = document.querySelector('.back');
  
  backBtn.addEventListener('click', (e) => render(input));
}



let signInBtn = document.querySelector('.signin-btn');
signInBtn.addEventListener('click', ()=>{location.href='signIn.html'});

let accordian = document.getElementsByClassName("FAQ-title");
for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener('click', function () {
    if (this.childNodes[1].classList.contains('fa-plus')) {
      this.childNodes[1].classList.remove('fa-plus');
      this.childNodes[1].classList.add('fa-x');
    } else {
      this.childNodes[1].classList.remove('fa-x');
      this.childNodes[1].classList.add('fa-plus');
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}


let searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', serachword);

function serachword() {
  let search = document.querySelector('.search');
  let word = search.value;
  let searchResult=[]
  webseries.filter((i) => {
    if (i.genres.includes(word) == true) {
    searchResult = [...searchResult, i]
    }
  });
  movies.filter((i) => {
    if (i.genres.includes(word) == true) {
    searchResult = [...searchResult, i]
    }
  });

  render(searchResult)
  
}