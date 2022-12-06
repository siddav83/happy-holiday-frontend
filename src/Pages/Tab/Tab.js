import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import { TabNav, AddNav, CategoryCard } from "../../Components";
import "./style.css";

export default function Tab(data) {
    const { categoryData, visible, setVisible } = useContext(CategoryContext);

    const { userData, setUserData } = useContext(UserContext);

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
        //  reference
        // const newVariable = userData;
        // newVariable[type] = [...userData[type], obj];
        // setUserData(newVariable);

        setVisible(!visible);
    };

    console.log(userData);

    return (
        <div className="main-container">
            <h1>Wants</h1>
            {!visible ? (
                <div className="like-dislike-container">
                    <form className="add-or-dislike" onSubmit={onSubmitHandler}>
                        <label htmlFor="type">
                            Likes / Dislikes / Wishlist:
                        </label>
                        <select id="type" name="type">
                            <option value="likes">likes</option>
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
                        <button>Submit</button>
                    </form>
                </div>
            ) : (
                visible
            )}
            <TabNav />
            <div className="card-container">
                {categoryData.map((cat, idx) => {
                    return (
                        <div className="">
                            <CategoryCard data={cat} index={idx} />
                        </div>
                    );
                })}
            </div>
            <AddNav />
        </div>
    );
}
