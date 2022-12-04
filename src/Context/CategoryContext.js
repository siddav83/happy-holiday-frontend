import React, { createContext, useState } from "react";
import CategoryData from "../Data/CategoryData";

export const Categories = createContext();

export const CategoryProvider = (props) => {
    const [catergory, setCategory] = useState(CategoryData);

    return (
        <Categories.Provider
            value={{
                catergory,
                setCategory,
            }}
        >
            {props.children}
        </Categories.Provider>
    );
};
