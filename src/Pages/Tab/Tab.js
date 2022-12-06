import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import { TabNav, AddNav, CategoryCard, AddCategory } from "../../Components";
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

		setVisible(visible);
	};

    console.log(userData);

    return (
        <div className="main-container">
            <h1>Wants</h1>
            {!visible ? (
                <div className="like-dislike-container">
                    <AddCategory onSubmitHandler={onSubmitHandler} />
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
