const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
    MAX_ATTEMPTS = 6,
    MASK_CHAR = "_";

new Vue({
    el: "#app",
    data: () => ({
        letters: {},
        hiddenWord: [],
        remainingAttempts: 0,
        words: []
    }),
    async mounted() {
        await Swal.fire(
            'Juego del Ahorcado',
            'Comenzar'
        );
        this.resetGame();
    },
    methods: {
        async resetGame() {
            this.resetAttempts();
            this.setupKeys();
            await this.chooseWord();
        },
        checkGameStatus() {
            if (this.playerWins()) {
                Swal.fire("¡Ganastes!\nLa palabra era " + this.getUnhiddenWord());
                this.resetGame();
            }
            if (this.playerLoses()) {
                Swal.fire("¡Perdistes!\nLa palabra correcta era " + this.getUnhiddenWord());
                this.resetGame();
            }
        },
        getUnhiddenWord() {
            let word = "";
            for (const letter of this.hiddenWord) {
                word += letter.letter;
            }
            return word;
        },
        playerWins() {
            for (const letter of this.hiddenWord) {
                if (letter.hidden) {
                    return false;
                }
            }
            return true;
        },
        playerLoses() {
            return this.remainingAttempts <= 0;
        },
        imagePath() {
            return `img/Ahorcado-${MAX_ATTEMPTS - this.remainingAttempts}.png`;
        },
        resetAttempts() {
            this.remainingAttempts = MAX_ATTEMPTS;
        },
        async chooseWord() {
            if (this.words.length === 0) {
                this.words = ["VIDEOJUEGO", "NINTENDO", "SIMULADOR", "AVENTURA", "MULTIJUGADOR", "ONLINE", "MINIJUEGO", "FIFA", "POKEMON", "PIXEL", "PLATAFORMAS", "PCGAMER", "PIXEL PARADISE"];
            }
            let word = this.words[Math.floor(Math.random() * this.words.length)];
            this.prepareWord(word);
        },
        prepareWord(word) {
            word = word.toUpperCase();
            const hiddenWord = [];
            for (const letter of word) {
                hiddenWord.push({
                    letter,
                    hidden: true,
                });
            }
            this.hiddenWord = hiddenWord;
        },
        displayWord() {
            let displayedWord = "";
            for (const letter of this.hiddenWord) {
                if (letter.hidden) {
                    displayedWord += MASK_CHAR;
                } else {
                    displayedWord += letter.letter;
                }
                displayedWord += " ";
            }
            return displayedWord;
        },
        setupKeys() {
            for (const letter of ALPHABET) {
                Vue.set(this.letters, letter, {
                    letter,
                    disabled: false,
                });
            }
        },
        letterExistsInWord(searchedLetter) {
            for (const letter of this.hiddenWord) {
                if (letter.letter === searchedLetter) {
                    return true;
                }
            }
            return false;
        },
        discoverLetter(letter) {
            for (const index in this.hiddenWord) {
                if (this.hiddenWord[index].letter === letter) {
                    this.hiddenWord[index].hidden = false;
                }
            }
        },
        attemptWithLetter(letter) {
            Vue.set(this.letters[letter], "disabled", true);
            if (!this.letterExistsInWord(letter)) {
                this.remainingAttempts -= 1;
            } else {
                this.discoverLetter(letter);
            }
            this.checkGameStatus();
        },
        addWord() {
            const newWord = prompt("Ingresa una nueva palabra:");
            if (newWord) {
                this.words.push(newWord.toUpperCase());
                localStorage.setItem("words", JSON.stringify(this.words));
            }
        }
    }
});
