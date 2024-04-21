import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {

console.log(state,route)
  return true;
};
