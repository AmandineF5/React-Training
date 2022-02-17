import { Fragment } from "react";
import AvailableMeals from "./available-meals";
import MealsSummary from "./meals-summary";

const Meals = () => {

return <Fragment>
    <MealsSummary/>
    <AvailableMeals/>
</Fragment>
}

export default Meals;