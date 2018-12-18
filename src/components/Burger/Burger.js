import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingredients!</p>;
    }
    // Object.keys transforms object keys into array, it does not
    // do anything to values so this array does not contain
    // values of keys like 2, 3 for bacon etc
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);