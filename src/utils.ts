export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() -0.5)



export const initialState= {
    loading: false,
    gameOver: false,
    number: 0,
    score: 0,
    message: ""

  }

export const TOTAL_QUES = 10