const initialState = {
  seats: [],
}

export function seatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_SEATS':
      return { ...state, seats: action.seats }
    // case 'ADD_REVIEW':
    //   return { ...state, reviews: [...state.reviews, action.review] }
    // case 'REMOVE_REVIEW':
    //   return { ...state, reviews: state.reviews.filter(review => review._id !== action.reviewId) }
    case 'UPDATE_SEAT':
      return {
        ...state,
        seats: state.seats.map(row =>{
          return row.map((seat) => seat.id === action.seat.id ? action.seat : seat)})
        
      }


    case 'UPDATE_BOARD':
      // console.log('UPDATE board: in reducer =', action.board);
      return {
        ...state,
        currBoard: action.board,
        boards: state.boards.map((board) =>
          board._id === action.board._id ? action.board : board
        ),
      };

    default:
      return state
  }
}
