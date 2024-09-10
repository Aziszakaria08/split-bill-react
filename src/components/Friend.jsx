import React from "react";

function Friend({ friend, onSelected, selectedFriend }) {
    const isSelected = selectedFriend?.id == friend.id;
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    Kamu berhutang RP {Math.abs(friend.balance)} ke
                    {friend.name}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} berhutang RP{Math.abs(friend.balance)} ke kamu
                </p>
            )}
            {friend.balance === 0 && (
                <p>kamu dan {friend.name} tidak memiliki hutang</p>
            )}
            <button className="button" onClick={() => onSelected(friend)}>
                {isSelected ? "Tutup" : "Pilih"}
            </button>
        </li>
    );
}

export default Friend;
