import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { UserContext } from "../../Context/UserContext";
import AvatarData from "../../Data/AvatarData";

const Profile = ({ username, type, index }) => {
    const { userData, setUserData } = useContext(UserContext);

    const checkFriend = () => {
        if (type === "friend") {
            setUserData((prev) => {
                return {
                    ...prev,
                    friendViewing: { ...prev, username },
                };
            });
        }
    };
    return (
        <div className="profile">
            <div className="profile-avatar">
                <img
                    src={type === "user" ? userData.avatar : AvatarData[index]}
                    alt="avatar"
                />
            </div>
            <NavLink
                onClick={checkFriend}
                to={type === "user" ? "/tab" : "/friends/tab"}
                className="profile-username"
            >
                <div>
                    <h3>{username[0].toUpperCase() + username.slice(1)}</h3>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/892/892817.png"
                        alt="leaf"
                        className="profile-leaf"
                    />
                </div>
            </NavLink>
        </div>
    );
};

export default Profile;
