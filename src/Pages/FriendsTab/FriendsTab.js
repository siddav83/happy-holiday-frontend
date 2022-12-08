import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import {
    TabNav,
    CategoryCard,
    AddCategory,
    HolidaysNavbar,
} from "../../Components";
import "./style.css";
import axios from "axios";
const baseUrl = "https://happy-holidays-backend.onrender.com/";

export default function Tab() {
    const [friendData, setFriendData] = useState();

    const { categoryData, visible, setVisible } = useContext(CategoryContext);
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        const username = userData.friendViewing.username;

        const fetchPost = async () => {
            try {
                // Get Friends ID
                const friendsData = await axios(`${baseUrl}users/${username}`);
                const friendsId = friendsData.data.id;
                // Get User Wishlist
                const friendsCards = await axios(
                    `${baseUrl}users/${friendsId}/wishlist`
                );
                setUserData((prev) => {
                    return {
                        ...prev,
                        friendViewing: {
                            ...prev.friendViewing,
                            wishlist: friendsCards.data,
                        },
                    };
                });
            } catch (err) {
                console.error(err);
            }
        };

        fetchPost();

        // axios
        // 	.get(`https://happiholidays.netlify.app/users/${userData.friendsViewing.id}/wishlist`)
        // 	.then((res) => {
        // 		const data = res.data;
        // 		setUserData((prev) => {
        // 			return { ...prev, wishlist: data };
        // 		});
        // 	});
    }, []);

    // const onSubmitHandler = (e) => {
    // 	e.preventDefault();
    // 	const type = e.target.type.value;
    // 	const category = e.target.category.value;
    // 	const item = e.target.item.value;

    // 	const obj = {
    // 		category,
    // 		item,
    // 	};
    // 	setUserData((prev) => {
    // 		return { ...prev, [type]: [...prev[type], { obj }] };
    // 	});

    // 	setVisible(visible);
    // };
    const { username, tab } = userData.friendViewing;
    const currentTab = userData.friendViewing.tab.toLowerCase();
    return (
        <div className="main-container">
            <h1>{username + "'s " + tab}</h1>
            {visible ? (
                <div className="like-dislike-container">
                    <AddCategory />
                </div>
            ) : (
                visible
            )}
            <TabNav type="friends" />
            <div className="card-container">
                {userData.friendViewing.wishlist[currentTab].map((cat, i) => {
                    return (
                        <div key={i}>
                            <CategoryCard data={cat} type="friend" />
                        </div>
                    );
                })}
            </div>
            <HolidaysNavbar />
        </div>
    );
}
