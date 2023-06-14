import { CanActivateFn } from '@angular/router';

export const ProductGuard: CanActivateFn = (route, state) => {
    let id = Number(route.paramMap.get('id'));
    return !isNaN(id) && id > 0;
};
