export const setValue = (dispatch, value) => {
    const action = { type: "SET_VALUE", payload: value }
    dispatch(action);
}