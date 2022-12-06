import React, { useContext } from "react";
import "./style.css";
import { ToggleContext } from "../../Context/ToggleContext";

const AddFriend = () => {
    const { setToggleAddFriend } = useContext(ToggleContext);

    const addNewFriend = (e) => {
        e.preventDefault();
        // Run a Post request
        console.log("Adding friends...");
    };

    const inviteFriend = (e) => {
        e.preventDefault();
        // Run a Post request
        console.log("Inviting friends...");
    };
    return (
        <div className="add-or-invite-container">
            <div className="add-or-invite">
                <h3>Add A Friend</h3>
                <form onSubmit={addNewFriend}>
                    <i className="fa-solid fa-circle-xmark"></i>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter Username..."
                    />
                    <input type="submit" value="Add" />
                </form>

                <h3>Invite</h3>
                <form onSubmit={inviteFriend}>
                    <i
                        className="fa-solid fa-circle-xmark"
                        onClick={() => setToggleAddFriend(false)}
                    />
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter Email..."
                    />
                    <input type="submit" value="Invite" />
                </form>
            </div>
        </div>
    );
};

export default AddFriend;
