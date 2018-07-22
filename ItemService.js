import { db } from './Db';

export const addItem =  (item) => {
    db.ref('/wall').push({
        status: item
    });
}
