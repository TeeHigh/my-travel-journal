import { useState } from "react"

const Modal = ({closeModal}) => {

    
    return (
        <dialog >
            <div className="modal">
                <h4 className="modal-heading">Update your travel journal</h4>
                <form className="form">
                    <div className="inputs">
                        <div className="country-input">
                            <label htmlFor="country">Country</label>
                            <input
                                name="country"
                                id="country"
                                // value={""}
                                required
                            />
                        </div>
                        <div className="title-input">
                            <label htmlFor="title">Title</label>
                            <input
                                name="title"
                                id="title"
                                // value={""}
                                required
                            />
                        </div>
                        <div className="duration-input">
                            <label htmlFor="duration">Duration</label>
                            <input
                                name="duration"
                                id="duration"
                                required
                            />
                        </div>
                        <div className="article-input">
                            <label htmlFor="article">About</label>
                            <textarea
                                name="article"
                                id="article"
                                // value={""}
                                required
                            />
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="submit" type="submit">Submit</button>
                        <button id="closeModal" type="reset" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default Modal