class Media {
   constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
   }
   get title() {
      return this._title;
   }
   get isCheckedOut() {
      return this._isCheckedOut;
   }
   get ratings() {
      return this._ratings;
   }

   toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
   }
   addRating(inputValue) {
      if (inputValue <= 5) {
         this._ratings.push(inputValue);
      } else {
         console.log("Rating have to be under 5");
      }
   }
   getAverageRating() {
      let ratingsSum = this.ratings.reduce(
         (currentSum, rating) => currentSum + rating,
         0
      );
      const averageRating = ratingsSum / this.ratings.length;
      return averageRating;
   }
   set isCheckedOut(checkIn) {
      this._isCheckedOut = checkIn;
   }
}
class Book extends Media {
   constructor(title, author, pages, genre) {
      super(title);
      this._author = author;
      this._pages = pages;
      this._genre = genre;
   }
   get author() {
      return this._author;
   }
   get pages() {
      return this._pages;
   }
}
class Movie extends Media {
   constructor(title, director, runTime, movieCast) {
      super(title)
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
   }
   get director() {
      return this._director;
   }
   get runtime() {
      return this._runtime;
   }
   get movieCast() {
      return this._movieCast;
   }
}
class CD extends Media {
   constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
   }
   get artist() {
      return this._artist;
   }
   get songs() {
      return this._runtime;
   }
   shuffle() {
      return this._songs.sort(() => Math.random() - 0.5);
   }
}
const historyOfEverything = new Book(
   "A Short History of Nearly Everything",
   "Bill Bryson",
   544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());
// Call for movie
const speed = new Movie('Jan de Bont', 'Speed', 116, 'Chandler Bing');

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
// Call For CD
const stateOfTrance = new CD('Armin Van buuren', 'State of Trance', ['first song', 'second song', 'theerd song', 'Another song', 'Last song']);

stateOfTrance.toggleCheckOutStatus();
console.log(stateOfTrance.isCheckedOut);

stateOfTrance.addRating(4);
stateOfTrance.addRating(5);
stateOfTrance.addRating(5);
// return shuffled songs
console.log(stateOfTrance.shuffle());

