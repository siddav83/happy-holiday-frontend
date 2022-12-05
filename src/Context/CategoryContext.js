import React, { createContext, useState } from "react";
import CategoryDatas from "../Data/CategoryData";

export const CategoryContext = createContext();
const dataType = ["like", "dislike", "wants"];
export const CategoryProvider = (props) => {
    const [type, setType] = useState(dataType);
    const [nameItem, setNameItem] = useState("");
    const [visible, setVisible] = useState(false);
    const [categoryData, setCategoryData] = useState(CategoryDatas);
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);

    return (
        <CategoryContext.Provider
            value={{
                categoryList,
                setCategoryList,
                categoryData,
                setCategoryData,
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
