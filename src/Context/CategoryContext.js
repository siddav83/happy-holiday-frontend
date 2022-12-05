import React, { createContext, useState } from "react";
import CategoryData from "../Data/CategoryData";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const [like, setLike] = useState(null);
    const [dislike, setDislike] = useState(null);
    const [want, setWant] = useState(null);
    const [visible, setVisible] = useState(false);
    const [category, setCategory] = useState(CategoryData);

    return (
        <CategoryContext.Provider
            value={{
                category,
                setCategory,
                visible,
                setVisible,
                like,
                setLike,
                dislike,
                setDislike,
                want,
                setWant,
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
};
