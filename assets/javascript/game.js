

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["Eleven", "Mike", "Hawkins", "Upsidedown"]
var game = {
	guessed: [],
	left: 10,

	start: function() {
		this.complete = false;
		this.word = words[Math.floor(Math.random() * words.length)];
          this.$guessfield = document.getElementById('guessfield');
          this.$wrong = document.getElementById('wrong');
          this.$remaining = document.getElementById('remaining');
          this.$guessfield.innerHTML = '_'.repeat(this.word.length);
	}
}

