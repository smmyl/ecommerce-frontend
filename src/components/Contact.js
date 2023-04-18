const Contact = (props) => {
    return (
        <>
        <h1>Contact Page</h1>
        <div className='contact-container'>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" onClick={props.profileToggle}>Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={props.homeToggle}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={props.aboutToggle}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" onClick={props.contactToggle}>Contact</a>
                </li>
            </ul>
            <h1>Contact Us</h1>
            <h2>Email us: swiftshop@info.com</h2>
            <h2>Customer Service: 1(800)888-7948</h2>
        </div>
        </>
    )
}

export default Contact