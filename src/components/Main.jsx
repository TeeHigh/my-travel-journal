import React, { useState } from 'react';
import Create from './Create'
import Card from './Card';
import Modal from './Modal'; // Updated import path
import data from '../data';

function Main() {
    const [dataArray, setDataArray] = useState([...data]);
    const [showModal, setShowModal] = useState(false);

    function addNewCard(newJournal) {
        setDataArray((prevDataArray) => [
            ...prevDataArray,
            {
                id: Date.now(), // Generate a unique ID (in practice, you might want to use a more robust method)
                ...newJournal,
            },
        ]);
        setShowModal(false);
    }

    function deleteJournal(id) {
        setDataArray((prevDataArray) =>
            prevDataArray.filter((item) => item.id !== id)
        );
    }

    return (
        <main className="main">
            <Create setShowModal={() => setShowModal(true)} />
            {showModal && (
                <Modal
                    isOpen={showModal}
                    closeModal={() => setShowModal(false)}
                    onSubmit={addNewCard}
                />
            )}
            {dataArray.length > 0 ? (
                dataArray.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        openModal={() => setShowModal(true)}
                        onDelete={() => deleteJournal(item.id)} // Pass the ID to deleteJournal
                    />
                ))
            ) : (
                <p>No journal to display. Create one</p>
            )}
        </main>
    );
}

export default Main;
