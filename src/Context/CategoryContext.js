import React, { createContext, useState } from "react";
import CategoryData from "../Data/CategoryData";

export const CategoryContext = createContext();
const dataType = ["like", "dislike", "wants"];
export const CategoryProvider = (props) => {
    const [type, setType] = useState(dataType);
    const [nameItem, setNameItem] = useState("");
    const [visible, setVisible] = useState(false);
    const [category, setCategory] = useState(CategoryData);

    return (
        <CategoryContext.Provider
            value={{
                category,
                setCategory,
                visible,
                setVisible,
                type,
                setType,
                nameItem,
                setNameItem,
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
};
