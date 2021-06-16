import { seatService } from '../../services/seatService'
import { userService } from '../../services/userService'
import { socketService, SOCKET_EVENT_seat_ADDED } from '../../services/socketService'


export function loadSeats() {
  return async dispatch => {
    try {
      const seats = await seatService.query()
      dispatch({ type: 'SET_SEATS', seats })

      // socketService.on(SOCKET_EVENT_REVIEW_ADDED, review =>{
      //   dispatch({ type: 'ADD_REVIEW', review })
      // })

    } catch (err) {
      console.log('seatActions: err in loadSeats', err)
    }
  }
}

export function addSeat(seat) {
  return async dispatch => {
    try {
      const addedSeat = await seatService.add(seat)
      dispatch({ type: 'ADD_SEAT', seat: addedSeat })
      
    } catch (err) {
      console.log('SeatActions: err in addSeat', err)
    }
  }
}

export function updateSeat(seat) {
  return async (dispatch) => {
      try {
          const updatedSeat = await seatService.update(seat);
          dispatch({ type: 'UPDATE_SEAT', seat: updatedSeat });
      } catch (err) {
          console.log('SeatActions: err in updateSeat', err);
      }
  };
}

export function removeSeat(seatId) {
  return async dispatch => {
    try {
      await seatService.remove(seatId)
      dispatch({ type: 'REMOVE_SEAT', seatId })
    } catch (err) {
      console.log('SeatActions: err in removeSeat', err)
    }
  }
}
