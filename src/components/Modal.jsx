import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, closeModal, onSubmit, formData, setFormData, currentAction, singleDay, setSingleDay }) => {

    const [imagePreview, setImagePreview] = useState(null); // State to hold image preview URL
    const [formChanged, setFormChanged] = useState(false) //State to check if form has undergone change

    useEffect(() => {
        // Reset formData when the create modal opens
        if (isOpen && currentAction === 'create') {
            setFormData({
                country: "",
                title: "",
                startDate: "",
                endDate: "",
                article: "",
                image: null,
                mapURL: "",
                singleDay: false
            });
        }
    }, [isOpen, setFormData]);

    function handleFormChange(event) {
        const { name, value, type, files, checked  } = event.target;

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
        } 
        else if(type === "checkbox"){
            setSingleDay(!singleDay)

            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: checked,
            }));
        }
        else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }

        setFormChanged(true)
    }


    const currentDate = new Date().toISOString().split('T')[0];

    function handleSubmit(event) {
        event.preventDefault();

        const { startDate, endDate } = formData;

        if(!singleDay){
            if (startDate > endDate || endDate > currentDate) {
                alert("Invalid date range. Please select valid dates.");
                return;
            }
        }

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
                        <div className="duration-container">
                            <label htmlFor="startDate">
                                Duration
                            </label>
                            <div className="duration-inputs">
                                <input
                                    name="startDate"
                                    id="startDate"
                                    className="duration"
                                    type="date"
                                    max={currentDate}
                                    value={formData.startDate}
                                    onChange={handleFormChange}
                                    placeholder="e.g 12th June, 2021 - 14th June, 2021"
                                />

                                {!singleDay && <input
                                    name="endDate"
                                    id="endDate"
                                    max={currentDate}
                                    className="duration"
                                    type="date"
                                    value={formData.endDate}
                                    onChange={handleFormChange}
                                    placeholder="e.g 12th June, 2021 - 14th June, 2021"
                                    
                                />}
                            </div>
                            <div className="single-day">(
                                <p>Single Day Trip</p>
                                &nbsp;
                                <input 
                                    name="singleDay"
                                    type="checkbox" 
                                    className="checkbox"
                                    checked={singleDay}
                                    onChange={handleFormChange}
                                />)
                            </div>
                        </div>
                        <div className="image-input">
                            <label htmlFor="location-image">Select location image</label>
                            <input
                                type="file"
                                name="image"
                                id="location-image"
                                accept="image/*"
                                onChange={handleFormChange}
                                
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
                                
                            />
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="submit" type="submit" >
                            {currentAction === 'create' ? 'Create' : 'Update'}
                        </button>
                        <button id="closeModal" type="button" onClick={closeModal} >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
