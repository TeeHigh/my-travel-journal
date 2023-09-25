import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, closeModal, onSubmit, formData, setFormData, currentAction }) => {
    

    const [imagePreview, setImagePreview] = useState(null); // State to hold image preview URL

    useEffect(() => {
        // Reset formData when the modal opens
        if (isOpen && currentAction === 'create') {
            setFormData({
                country: "",
                title: "",
                duration: "",
                article: "",
                image: null,
                mapURL: "",
            });
        }
    }, [isOpen, setFormData]);

    function handleFormChange(event) {
        const { name, value, type, files } = event.target;

        // Handle image input separately
        if (type === "file") {
            const selectedImage = files[0];

            // Generate a preview URL for the selected image
            if (selectedImage) {
                const imageUrl = URL.createObjectURL(selectedImage);
                setImagePreview(imageUrl);

                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [name]: imageUrl,
                }));
            } else {
                setImagePreview(null);
            }
            console.log(formData, selectedImage, imagePreview)
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(formData);
        closeModal();
    }

    return (
        <div className={`dialog ${isOpen ? "" : "hidden"}`}>
            <div className="modal">
                <h4 className="modal-heading">Update your travel journal</h4>
                <form className="form">
                    <div className="inputs">
                        <div className="country-input">
                            <label htmlFor="country">Country</label>
                            <input
                                name="country"
                                id="country"
                                onChange={handleFormChange}
                                value={formData.country}
                                placeholder="Enter Country"
                                required
                            />
                        </div>
                        <div className="url-input">
                            <label htmlFor="mapURL">Map URL (optional) &nbsp;
                                <a href="https://www.google.com/maps" target="_blank" className="google-maps">Google Maps</a>
                            </label>
                            <input
                                name="mapURL"
                                id="mapURL"
                                onChange={handleFormChange}
                                value={formData.mapURL}
                                placeholder="e.g https://www.google.com/maps/place/dubai"
                            />
                        </div>
                        <div className="title-input">
                            <label htmlFor="title">Title</label>
                            <input
                                name="title"
                                id="title"
                                onChange={handleFormChange}
                                value={formData.title}
                                placeholder="Enter name of place visited"
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
                                placeholder="e.g 12th June, 2021 - 14th June, 2021"
                                required
                            />
                        </div>
                        <div className="image-input">
                            <label htmlFor="location-image">Select location image</label>
                            <input
                                type="file"
                                name="image"
                                id="location-image"
                                accept="image/*"
                                onChange={handleFormChange}
                                required
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Selected Image"
                                    style={{ maxWidth: "100px" }}
                                />
                            )}
                        </div>
                        <div className="article-input">
                            <label htmlFor="article">About</label>
                            <textarea
                                name="article"
                                id="article"
                                onChange={handleFormChange}
                                value={formData.article}
                                placeholder="Write about your experience..."
                                required
                            />
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="submit" type="submit" onClick={handleSubmit}>
                            {currentAction === 'create' ? 'Create' : 'Update'}
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
