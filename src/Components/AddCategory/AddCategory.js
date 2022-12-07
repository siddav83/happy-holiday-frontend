import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { CategoryContext } from "../../Context/CategoryContext";
import { ToggleContext } from "../../Context/ToggleContext";

import axios from "axios";

export default function AddCategory() {
    const { visible, setVisible } = useContext(CategoryContext);
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
            .post(`http://127.0.0.1:5000/wants`, obj)
            // .post(`http://127.0.0.1:5000/users/${userData.id}/${type}`, { obj })
            .then((res) => {
                console.log(res, "POST RESPONSE");
                if (res.status === 201) {
                    console.log("Friend added.");
                    setToggleAddCategory(false);
                    // ! need friends ID im adding
                    setUserData((prev) => {
                        return { ...prev, [type]: [...prev[type], { obj }] };
                    });
                } else {
                    alert.log("Friend not added, username doesn't exist.");
                }
            })
            .catch((err) => console.error(err));
    };
    setVisible(visible);

    return (
        <form className="add-or-dislike" onSubmit={onSubmitHandler}>
            <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setToggleAddCategory(false)}
            />
            <label htmlFor="type">Wants / Dislikes / Wishlist:</label>
            <select id="type" name="type">
                <option value="wants">wants</option>
                <option value="dislikes">dislikes</option>
                <option value="dreams">dreams</option>
                <option value="brands">brands</option>
            </select>
            <label htmlFor="category">Choose a category:</label>
            <select id="category" name="category">
                <option value="phone">phone</option>
                <option value="computers">computers</option>
                <option value="laptop">laptop</option>
                <option value="confectionary">confectionary</option>
                <option value="vouchers">vouchers</option>
                <option value="clothes">clothes</option>
                <option value="money">money</option>
            </select>
            <label htmlFor="item">item description</label>
            <input type="text" id="item" name="item" />
            <button className="add-cat-btn">Submit</button>
        </form>
    );
}
