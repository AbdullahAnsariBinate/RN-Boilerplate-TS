import { Decrement, Increment, TOGGLE_THEME } from '../constant';

export function increment() {
  return {
    type: Increment,
  };
}

export function decrement() {
  return {
    type: Decrement,
  };
}

export function toggletheme(){
    return {
        type: TOGGLE_THEME
    }
}