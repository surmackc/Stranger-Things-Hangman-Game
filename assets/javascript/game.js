

//the words in our array for players to guess
var words = ['eleven', 'mike', 'hawkins', 'upsidedown', 'madmax', 'pollywog']
//our game - a blank array to put guessed letters in and a number of guesses to start at
var game = {
	guessed: [],
	left: 10,

//when the game starts we run this function
	start: function() {
//the word to guess is not complete yet, this is always false at the beginning of the game
		this.complete = false;
//our "word" variable is equal to a random word chosen from our array
		this.word = words[Math.floor(Math.random() * words.length)];
//our right, wrong, and remaining operations will be applied to the appropriate html tags
    this.$right = document.getElementById('right');
    this.$wrong = document.getElementById('wrong');
    this.$remain = document.getElementById('remain');
//when the game starts the html for the word being guessed will be underscores matching the length of the word
    this.$right.innerHTML = ('_').repeat(this.word.length);
		},

//our guess function which has letters passing through it
	guess: function(letter) {
//we will continue to guess if letters left to guess are greater than 0 and our word is not complete yet
          if (this.left > 0 && this.complete != true) {
//if the letter is contained within the index of our word or the letter has already been guessed then we have a right answer, else wrong answer
            if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
              this.right(letter);
            } else {
              this.wrong(letter);
            }
          }
        },
//when we receive a right answer this function operates on the letter
    right: function(letter) {
//this is our for loop which is running over the word checking to see if the guessed letter matches any of those in the word
          for(var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
//if the letter is in our word then we act on that character alone and join that character to our html              
              var word = this.$right.innerHTML.split('');
              word[i] = letter;
              this.$right.innerHTML = word.join('');
            }
          }
//if we get to the point where our number of empty spaces or guesses gets below zero then we know the game is complete and we alert the user that they have won
          if (this.$right.innerHTML.indexOf('_') < 0) {
            this.complete = true;
            alert('You Win!');
          }
        },
//if our guess is wrong then this function operates on the letter
    wrong: function(letter) {
//if the guessed letter is wrong we are going to push that letter into our guessed array      
          this.guessed.push(letter);
//this letter will be displayed in the html along with a space
          this.$wrong.innerHTML += ' ' + letter;
//our number of guesses decreases by 1
          this.left--;
          this.$remain.innerHTML = this.left;
//once our number of guesses gets below zero we alert the player that they lose and display the word
          if (this.left < 1) {
            alert('You Lose! '+ this.word);
//our game is now complete
            this.complete = true;
          }
        }
      };
//our game starts onkeyup and our variable letter comes from the charcode entered by the user, we also take this letter and make it lowercase 
    game.start();
      document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        game.guess(letter);
      };
	


