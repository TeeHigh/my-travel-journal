import React, { useState } from 'react';
import Create from './Create'
import Card from './Card';
import Modal from './Modal'; // Updated import path
import data from '../data';

function Main() {
    const [dataArray, setDataArray] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // console.log(isModalOpen)

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
            <div className="create-container">
                <button className='create-btn' onClick={() => setShowModal(true)}>
                    Create +
                </button>
            </div>
            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSubmit={addNewCard}
                />
            )}
            {dataArray.length > 0 ? (
                dataArray.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
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
