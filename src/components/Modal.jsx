import React, { useState } from "react";

const Modal = ({ isOpen, closeModal, onSubmit }) => {
    const [formData, setFormData] = useState({
        country: "",
        title: "",
        duration: "",
        article: "",
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null); // State to hold image preview URL

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
                        <div className="image-input">
                            <label htmlFor="image">Select location image</label>
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
