import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { TabNav, AddNav, CategoryCard } from "../../Components";
import "./style.css";

export default function Tab(data) {
    const {
        category,
        setCategory,
        visible,
        setVisible,
        type,
        setType,
        nameItem,
        setNameItem,
    } = useContext(CategoryContext);
    return (
        <div className="main-container">
            <h1>Wants</h1>
            {!visible ? (
                <form className="likeAndDislikeForm">
                    <label for="type">Likes / Dislikes / Wishlist:</label>
                    <select id="type" name="type" size="3">
                        <option value="">phone</option>
                        <option value="like">like</option>
                        <option value="dislike">dislike</option>
                        <option value="dreams">dreams</option>
                    </select>
                    <label for="category">Choose a category:</label>
                    <select id="category" name="category" size="10">
                        <option value="">phone</option>
                        <option value="computers">computers</option>
                        <option value="laptop">laptop</option>
                        <option value="confectionary">confectionary</option>
                        <option value="vouchers">vouchers</option>
                        <option value="clothes">clothes</option>
                        <option value="money">money</option>
                    </select>
                    <label for="item">item description</label>
                    <input type="text" id="item" name="item" />
                    <button>Add</button>
                </form>
            ) : (
                visible
            )}
            <TabNav />
            <div className="card-container">
                {category.map((cat) => {
                    return (
                        <div className="">
                            <CategoryCard data={cat} />
                        </div>
                    );
                })}
            </div>
            <AddNav />
        </div>
    );
}
