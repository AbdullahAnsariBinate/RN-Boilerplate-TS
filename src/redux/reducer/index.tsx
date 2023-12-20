import { Increment, Decrement, TOGGLE_THEME } from '../constant';

interface State {
  count: number;
  isDarkMode:boolean
}

const initialState: State = {
  count: 0, 
  isDarkMode:false
};

const counter = (state: State = initialState, action: { type: string }) => {
    console.log('Action:', action.type); 
  switch (action.type) {
    case Increment:
      return { ...state, count: state.count + 1 };
    case Decrement:
      return { ...state, count: state.count - 1 };
    case TOGGLE_THEME:
    return{...state,isDarkMode:!state.isDarkMode}
    default:
      return state;
  }
};

export default counter;
