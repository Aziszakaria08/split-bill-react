import React, { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
    const { name } = selectedFriend;
    const [amount, setAmount] = useState("");
    const [myBill, setMyBill] = useState("");
    const [whoIsPlaying, setWhoIsPlaying] = useState("user");

    const friendBill = amount ? amount - myBill : "";

    function handleSubmit(e) {
        e.preventDefault();
        if (!amount || !myBill) return;
        onSplitBill(whoIsPlaying === "user" ? friendBill : -myBill);
    }
    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Patungan bareng si {name}</h2>
            <label>💵Total tagihan</label>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <label>🙋‍♂️Tagihan kamu</label>
            <input
                type="text"
                value={myBill}
                onChange={(e) => setMyBill(e.target.value)}
            />
            <label>🙋tagihan {name}</label>
            <input type="text" disabled value={friendBill} />
            <label>🤑Ditalangin sama </label>
            <select
                value={whoIsPlaying}
                onChange={(e) => setWhoIsPlaying(e.target.value)}
            >
                <option value="user">Kamu</option>
                <option value="friend">{name}</option>
            </select>
            <button className="button">Tambah</button>
        </form>
    );
}

export default FormSplitBill;
