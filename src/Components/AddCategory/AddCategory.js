import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { CategoryContext } from "../../Context/CategoryContext";
import { ToggleContext } from "../../Context/ToggleContext";

import axios from "axios";

export default function AddCategory() {
    const { visible, setVisible, categoryData } = useContext(CategoryContext);
    const { setToggleAddCategory } = useContext(ToggleContext);

    const { userData, setUserData } = useContext(UserContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const type = e.target.type.value;
        const category = e.target.category.value;
        const item = e.target.item.value;

        const obj = {
            author: userData.id,
            category,
            item,
        };

        console.log(obj, "POST ITEM");
        // Add User (POST)
        axios
            .post(`http://127.0.0.1:5000/${type}`, obj)
            // .post(`http://127.0.0.1:5000/users/${userData.id}/${type}`, { obj })
            .then((res) => {
                console.log(res, "POST RESPONSE");
                if (res.status === 201) {
                    console.log("Category added.");
                    setToggleAddCategory(false);
                    // ! need friends ID im adding
                    setUserData((prev) => {
                        console.log("PREV", prev.wishlist[type]);
                        // return { ...prev, [type]: [...prev[type], obj] };
                        return {...prev, wishlist: {...prev.wishlist, [type]: [...prev.wishlist[type], obj]}}
                    });
                } else {
                    alert.log("Friend not added, username doesn't exist.");
                }
            })
            .catch((err) => console.error(err));
    };
    setVisible(visible);
    console.log(categoryData);

    return (
        <form className="add-or-dislike" onSubmit={onSubmitHandler}>
            <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setToggleAddCategory(false)}
            />
            <label htmlFor="type">Types</label>
            <select id="type" name="type" required>
                <option value="">Select type</option>
                <option value="wants">Wants</option>
                <option value="dislikes">Dislikes</option>
                <option value="dreams">Dreams</option>
            </select>
            <label htmlFor="category">Choose a category:</label>
            <select id="category" name="category" required>
                <option value="">Select category</option>
                {categoryData.map((item) => {
                    return (
                        <option key={item.name} value={item.name}>
                            {item.name} {item.symbols}
                        </option>
                    );
                })}
            </select>
            <label htmlFor="item">item description</label>
            <input
                type="text"
                id="item"
                name="item"
                placeholder="Optional..."
            />
            <button className="add-cat-btn">Submit</button>
        </form>
    );
}
