import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { CategoryContext } from "../../Context/CategoryContext";
import { ToggleContext } from "../../Context/ToggleContext";
import "./style.css";
import axios from "axios";
const baseUrl = "https://happy-holidays-backend.onrender.com/";

export default function AddCategory() {
    const { visible, setVisible, categoryData } = useContext(CategoryContext);
    const { setToggleAddCategory } = useContext(ToggleContext);

    const { userData, setUserData } = useContext(UserContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const type = userData.tab.toLowerCase();
        const category = e.target.category.value;
        const item = e.target.item.value;

        const obj = {
            author: userData.id,
            category,
            item,
        };

        // Add User (POST)
        axios
            .post(`${baseUrl}${type}`, obj)
            .then((res) => {
                if (res.status === 201) {
                    setToggleAddCategory(false);
                    setUserData((prev) => {
                        return {
                            ...prev,
                            wishlist: {
                                ...prev.wishlist,
                                [type]: [...prev.wishlist[type], obj],
                            },
                        };
                    });
                } else {
                    alert.log("Friend not added, username doesn't exist.");
                }
            })
            .catch((err) => console.error(err));
    };
    // setVisible(visible);

    return (
        <form className="add-or-dislike" onSubmit={onSubmitHandler}>
            <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setToggleAddCategory(false)}
            />
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
