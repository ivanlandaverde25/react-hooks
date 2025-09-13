export interface ScrambleWordState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
}

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = ():ScrambleWordState => {

    const shuffleWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffleWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffleWords[0]),
    skipCounter: 0,
    words: shuffleArray(shuffleWords),
    totalWords: shuffleWords.length,
  };
}

export type ScrambleWordAction = 
| { type: 'SET_GUESS', payload: string }
| { type: 'CHECK_ANSWER' }
| { type: 'RESET_GAME', payload: ScrambleWordState }
| { type: 'SKIP_WORD' }
| { type: 'NO_TENGO_LA_MENOR_CUALES_ACCIONES_OCUPO'};

export const scrambleWordsReducer = ( state: ScrambleWordState, actions:ScrambleWordAction): ScrambleWordState => {
    switch(actions.type){
        
        case 'SET_GUESS':
            return{
                ...state,
                guess: actions.payload.trim().toUpperCase()
            }

        case 'CHECK_ANSWER':{
            if(state.currentWord === state.guess){
                const newWords = state.words.slice(1);

                return {
                    ...state,
                    words: newWords,
                    points: state.points + 1,
                    guess: '',
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0])
                };
            }

            return {
                ...state,
                errorCounter: state.errorCounter + 1,
                guess: '',
                isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors,
            }
        }

        case 'RESET_GAME': 
            return actions.payload;

        case 'SKIP_WORD': {

            if(state.skipCounter <= state.maxSkips){
                
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    words: newWords,
                    skipCounter: state.skipCounter + 1,
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0]),
                    guess: ''
                }
            }

            return state;
        }

        default:
            return state;
    }
}