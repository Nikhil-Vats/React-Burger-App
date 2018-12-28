import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
};

//CAN ALSO DO THIS FOR REMOVE INGREDIENTS and others

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
            };
            //CAN BE CONVERTED TO USE updatedObject LIKE ADD_INGREDIENT
        case actionTypes.SET_INGREDIENT: 
            return updateObject(state, {
                // ingredients: action.ingredients,
                totalPrice: 4,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat //FOR ordering of ingredients in burger image
                },
                error: false
            });
        case action.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {
                error: true
            });        
        default: 
            return state;        
    }
};

export default reducer;