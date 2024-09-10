import { useState } from "react";
import FriendList from "./components/friendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
    {
        id: 1,
        name: "Ilham",
        image: "https://i.pravatar.cc/150?img=3",
        balance: -10,
    },
    {
        id: 2,
        name: "Jono",
        image: "https://i.pravatar.cc/150?img=54",
        balance: 20,
    },
    {
        id: 3,
        name: "Listy",
        image: "https://i.pravatar.cc/150?img=30",
        balance: 0,
    },
];

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend((showAddFriend) => !showAddFriend);
        setSelectedFriend(null);
    }

    function handleAddFriend(friend) {
        setFriends((newFriend) => [...newFriend, friend]);
    }

    function handleSelectedFriend(friend) {
        setSelectedFriend((selected) =>
            selected?.id === friend.id ? null : friend
        );
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends(
            friends.map((friend) => {
                if (friend.id === selectedFriend?.id)
                    return {
                        ...friend,
                        balance: friend.balance + value,
                    };
                return friend;
            })
        );
        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList
                    friends={friends}
                    onSelectedFriend={handleSelectedFriend}
                    selectedFriend={selectedFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <button className="button" onClick={handleShowAddFriend}>
                    {showAddFriend ? "Tutup" : "Tambah Teman"}
                </button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}

export default App;
