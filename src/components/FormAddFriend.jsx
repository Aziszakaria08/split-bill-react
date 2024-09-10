import React, { useState } from "react";

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/150?");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !image) return;
        const id = Math.round(Math.random() * 10 + 1);
        const newFriend = {
            id,
            name,
            image: `${image}?img=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);
        setName("");
        setImage("");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="">🙆Nama</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">📷Gambar</label>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button className="button">Tambah</button>
        </form>
    );
}

export default FormAddFriend;
