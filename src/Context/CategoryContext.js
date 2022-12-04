import React, { createContext, useState } from "react";
import CategoryData from "../Data/CategoryData";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const [category, setCategory] = useState(CategoryData);

    return (
        <CategoryContext.Provider
            value={{
                category,
                setCategory,
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
};
