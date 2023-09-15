import React, { useState } from "react";

const Modal = ({ isOpen, closeModal, onSubmit }) => {
    const [formData, setFormData] = useState({
        country: "",
        title: "",
        duration: "",
        article: "",
    });

    function handleFormChange(event) {
        const { name, value } = event.target;

        // Update formData with the new value
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Pass the formData to the parent component via handleForm prop
        onSubmit(formData);
    }

    return (
        <div className={`dialog ${isOpen ? '' : 'hidden'}`}>
            <div className="modal">
                <h4 className="modal-heading">Update your travel journal</h4>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="country-input">
                            <label htmlFor="country">Country</label>
                            <input
                                name="country"
                                id="country"
                                onChange={handleFormChange}
                                value={formData.country}
                                required
                            />
                        </div>
                        <div className="title-input">
                            <label htmlFor="title">Title</label>
                            <input
                                name="title"
                                id="title"
                                onChange={handleFormChange}
                                value={formData.title}
                                required
                            />
                        </div>
                        <div className="duration-input">
                            <label htmlFor="duration">Duration</label>
                            <input
                                name="duration"
                                id="duration"
                                value={formData.duration}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="article-input">
                            <label htmlFor="article">About</label>
                            <textarea
                                name="article"
                                id="article"
                                onChange={handleFormChange}
                                value={formData.article}
                                required
                            />
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="submit" type="submit">
                            Submit
                        </button>
                        <button id="closeModal" type="button" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
