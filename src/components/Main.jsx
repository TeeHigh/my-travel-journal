import React, { useState, useEffect } from 'react';
import Create from './Create';
import Card from './Card';
import Modal from './Modal'; // Updated import path

function Main() {
    const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem("dataArray")) || []);
    const [showModal, setShowModal] = useState(false);
    const [currentAction, setCurrentAction] = useState('create'); // 'create' or 'edit'
    const [editingCard, setEditingCard] = useState(null); // Card data being edited

    useEffect(() => {
        localStorage.setItem("dataArray", JSON.stringify(dataArray));
    }, [dataArray]);

    const [formData, setFormData] = useState({
        country: "",
        title: "",
        duration: "",
        article: "",
        image: null,
        mapURL: "",
    });

    function openCreateModal() {
        setCurrentAction('create');
        setFormData({
            country: "",
            title: "",
            duration: "",
            article: "",
            image: null,
            mapURL: "",
        });
        setShowModal(true);
    }

    function openEditModal(card) {
        setCurrentAction('edit');
        setFormData(card); // Set formData with card data
        setShowModal(true);
    }

    function addNewCard(newJournal) {
        if (currentAction === 'create') {
            // Create a new card
            setDataArray((prevDataArray) => [
                {
                    id: Date.now(),
                    ...newJournal,
                },
                ...prevDataArray,
            ]);
        } else if (currentAction === 'edit' && editingCard) {
            // Update an existing card
            const updatedCards = dataArray.map((card) =>
                card.id === editingCard.id ? { ...card, ...newJournal } : card
            );
            setDataArray(updatedCards);
        }

        setShowModal(false);
        console.log(newJournal);
    }

    function deleteJournal(id) {
        setDataArray((prevDataArray) =>
            prevDataArray.filter((item) => item.id !== id)
        );
    }

    return (
        <main className="main">
            <Create openCreateModal={openCreateModal} />
            {showModal && (
                <Modal
                    isOpen={showModal}
                    closeModal={() => setShowModal(false)}
                    onSubmit={addNewCard}
                    formData={formData}
                    setFormData={setFormData}
                    currentAction={currentAction}
                />
            )}
            {dataArray.length > 0 ? (
                dataArray.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        openEditModal={() => openEditModal(item)}
                        onDelete={() => deleteJournal(item.id)}
                    />
                ))
            ) : (
                <p>No journal to display. Create one</p>
            )}
        </main>
    );
}

export default Main;
