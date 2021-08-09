import { createStore } from "redux";

const initialState = {
    value: "task",
    tasks: [
        { title: "task 001" }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return {
                ...state,
                value: action.payload
            };

        case "ADD_TASK":
            return {
                ...state,
                value: "",
                tasks: [...state.tasks, { title: action.payload }]
            }

        default: return state;
    }
}

const store = createStore(reducer);

export default store;