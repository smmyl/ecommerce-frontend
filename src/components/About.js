const About = (props) => {

    
    return (
        <div class='about-container'>
             <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link " onClick={props.profileToggle}>Profile</a>
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Home</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Clothes</a>
                    <a class="dropdown-item" href="#">Shoes</a>
                    <a class="dropdown-item" href="#">Accessories</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" onClick={props.homeToggle}>Home</a>
                    </div>
                </li> */}
                <li class="nav-item">
                    <a class="nav-link" onClick={props.homeToggle}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" onClick={props.aboutToggle}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Contact</a>
                </li>
            </ul>
            <p>Welcome to SwiftShop! Our mission is to provide a seamless online shopping experience for our customers.
            <br/>
            <br/>
            Our team of talented and dedicated developers has worked tirelessly to create a user-friendly and visually appealing e-commerce platform. We believe that our website reflects our commitment to quality, innovation, and customer satisfaction.
            <br/>
            <br/>
            At SwiftShop, you'll find a wide selection of products from various categories, including clothing, accessories,and shoes. We've partnered with top brands and suppliers to bring you high-quality products at affordable prices.
            <br/>
            <br/>
            In addition to our products, we also offer resources and educational content to help you navigate the world of e-commerce. Our blog is regularly updated with articles on topics such as online marketing, website design, customer service, and more. We also offer online courses and webinars taught by industry experts to help you enhance your e-commerce knowledge and skills.
            <br/>
            <br/>
            We are committed to providing our customers with exceptional service and support. If you have any questions or concerns, our friendly and knowledgeable customer service team is always here to assist you.
            <br/>
            <br/>
            Thank you for visiting SwiftShop. We hope you enjoy your shopping experience with us!</p>
        </div>
    )
}

export default About