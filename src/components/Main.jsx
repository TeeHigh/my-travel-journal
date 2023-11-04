import React, { useState, useEffect } from 'react';
import Create from './Create';
import Card from './Card';
import Modal from './Modal'; // Updated import path

function Main() {
    const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem("dataArray")) || []);
    const [showModal, setShowModal] = useState(false);
    const [currentAction, setCurrentAction] = useState('create'); // 'create' or 'edit'
    const [editingCard, setEditingCard] = useState(null); // Card data being edited
    const [singleDay, setSingleDay] = useState(false)

    useEffect(() => {
        localStorage.setItem("dataArray", JSON.stringify(dataArray));
    }, [dataArray]);

    const [formData, setFormData] = useState({
        country: "",
        title: "",
        startDate: "",
        endDate: "",
        article: "",
        image: null,
        mapURL: "",
        singleDay: false
    });

    function openCreateModal() {
        setCurrentAction('create');
        setShowModal(true);
    }

    function openEditModal(card) {
        setCurrentAction('edit');
        setFormData(card); // Set formData with card data
        setEditingCard(card)
        setSingleDay(card.singleDay)
        setShowModal(true);
    }


    /* FUNCTION TO MOVE UPDATED CARD TO TOP OF ARRAY */
    const addNewCard = (newJournal) => {
        const updatedDataArray = currentAction === 'create'
            ? [
                {
                    id: Date.now(),
                    ...newJournal,
                },
                ...dataArray
            ]
            : [
                {
                    id: editingCard.id,
                    ...newJournal,
                },
                ...dataArray.filter((item) => item.id !== editingCard.id)
            ];
    
        setDataArray(updatedDataArray);
        setShowModal(false);
    };

    /*FUNCTION TO DELETE A CARD*/
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
                    singleDay={singleDay}
                    setSingleDay={setSingleDay}
                />
            )}
            {dataArray.length > 0 ? (
                dataArray.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        openEditModal={() => openEditModal(item)}
                        onDelete={() => deleteJournal(item.id)}
                        singleDay={singleDay}
                    />
                ))
            ) : (
                <p>No journal to display. Create one</p>
            )}
        </main>
    );
}

export default Main;
