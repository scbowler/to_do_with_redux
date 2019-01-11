export default (store) => (next) => async (action) => {
    // Code goes here

    if(!action.payload || !action.payload.then){
        return next(action);
    }

    const resp = await action.payload;

    const newAction = {
        ...action,
        payload: resp
    }

    store.dispatch(newAction);

    return resp;
}

// export default function(store){
//     return function(next){
//         return function(action){
//             // Code goes here
//         }
//     }
// }
