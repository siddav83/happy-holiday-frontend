import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { CategoryContext } from "../../Context/CategoryContext";

export default function AddCategory() {
    const { visible, setVisible } = useContext(CategoryContext);

    const { setUserData } = useContext(UserContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const type = e.target.type.value;
        const category = e.target.category.value;
        const item = e.target.item.value;

        const obj = {
            category,
            item,
        };
        setUserData((prev) => {
            return { ...prev, [type]: [...prev[type], { obj }] };
        });

        setVisible(visible);
    };
    return (
        <form className="add-or-dislike" onSubmit={onSubmitHandler}>
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
