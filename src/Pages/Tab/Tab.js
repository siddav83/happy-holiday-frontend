import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import { TabNav, AddNav, CategoryCard, AddCategory } from "../../Components";
import { ToggleContext } from "../../Context/ToggleContext";

import "./style.css";
import axios from "axios";

export default function Tab(data) {
    const { categoryData, visible, setVisible } = useContext(CategoryContext);
    const { userData, setUserData } = useContext(UserContext);
    const { toggleAddCategory, setToggleAddCategory } =
        useContext(ToggleContext);

    const handleEvent = (e) => {
        e.preventDefault();
        setVisible(!visible);
        setToggleAddCategory(!toggleAddCategory);
    };

    useEffect(() => {
        // ! Get Friends Data (API)
        axios
            .get(`http://127.0.0.1:5000/users/${userData.id}/wants`)
            .then((res) => {
                const data = res.data;
                setUserData((prev) => {
                    console.log(data);
                    return { ...prev, wants: data };
                });
            });
    }, []);

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     const type = e.target.type.value;
    //     const category = e.target.category.value;
    //     const item = e.target.item.value;

    //     const obj = {
    //         category,
    //         item,
    //     };
    //     setUserData((prev) => {
    //         return { ...prev, [type]: [...prev[type], { obj }] };
    //     });
    //     // !

    //     setToggleAddCategory(toggleAddCategory);
    // };
    // console.log(toggleAddCategory);
    // console.log(toggleAddCategory);
    return (
        <div className="main-container">
            <h1>Wants</h1>
            {toggleAddCategory ? (
                <div className="like-dislike-container">
                    <AddCategory />
                </div>
            ) : undefined}
            <TabNav type="user" />
            <div className="card-container">
                {userData.wants.map((cat, i) => {
                    return (
                        <div key={i}>
                            <CategoryCard data={cat} />
                        </div>
                    );
                })}
            </div>
            <AddNav click={handleEvent} />
        </div>
    );
}
