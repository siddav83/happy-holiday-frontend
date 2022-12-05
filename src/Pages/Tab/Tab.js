import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { TabNav, AddNav, CategoryCard } from "../../Components";
import "./style.css";

export default function Tab(data) {
    const {
        category,
        visible,
        like,
        setLike,
        dislike,
        setDislike,
        want,
        setWant,
    } = useContext(CategoryContext);
    return (
        <div className="main-container">
            <h1>Wants</h1>
            {!visible ? (
                <form className="likeAndDislikeForm">
                    <input type="radio" id="like" value="like" />
                    <label for="like">LIKE</label>
                    <input type="text" id="category-like" />
                    <label htmlFor="category-like"></label>
                    <input type="radio" id="dislike" value="dislike" />
                    <label for="dislike">DISLIKE</label>
                    <input type="radio" id="want" value="wanty" />
                    <label for="want">WANT</label>
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
