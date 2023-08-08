import image from '/images/globe-icon.png'

const Header = () => {
    return (
        <header className="header">
            <img src={image} alt="Image logo" className="logo" />
            <p>my travel journal.</p>
        </header>
    )
}

export default Header