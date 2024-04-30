export const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="menu">
                <h3>HIDEVA GROUP </h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <a href="#" className="btn">Contact us</a>
                </ul>
            </div>

        <div className="hero">
            <div className="hero-child">
                <div className="heroText">
                    <p className="pEl">We are Hideva Group</p>
                    <h1>Design and Build Contractor</h1>
                    <p className="pEl2">With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship</p>
                    <a href="#" className="btn2">Get a quote</a>
                </div>
                <div className="spanEl">
                    <span><h3>18+</h3> <br /><p>Construction Services</p></span>
                    <span><h3>10+</h3><br /><p>Fundi Engineers</p></span>
                    <span><h3>5+</h3><br /><p>Regular Suppliers</p></span>
                </div>
            </div>
        </div>
        </div>
    )
}