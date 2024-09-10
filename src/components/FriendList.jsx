import React from "react";
import Friend from "./Friend";

function FriendList({ friends, onSelectedFriend, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend, index) => (
                <Friend
                    friend={friend}
                    key={index}
                    onSelected={onSelectedFriend}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}

export default FriendList;
