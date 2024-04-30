import instagram from '../assets/instagram.svg';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/twitter.svg';

export const Footer = () => {
    return(
        <div className="footer">

            <div className="footerChild">
                <h2>HIDEVA GROUP </h2>
                <div className='linkDiv'>
                    <div className='linkDivEl'>
                        <h4>Services</h4>
                        <a href="#">New Builds</a><br />
                        <a href="#">Renovations</a><br />
                        <a href="#">Conversions</a><br />
                        <a href="#">Fit Out</a>
                    </div>
                    <div className='linkDivEl'>
                        <h4>Information</h4>
                        <a href="#">Events</a><br />
                        <a href="#">Contact us</a><br />
                        <a href="#">Privacy policy</a><br />
                        <a href="#">Terms of services</a>
                    </div>
                    <div className='linkDivEl'>
                        <h4>Address</h4>
                        <a href="#">Nyeri Town - Nyeri</a><br />
                        <a href="#">Mumbi</a><br />
                        <a href="#">Call us</a><br />
                        <a href="#">Email us</a>
                    </div>
                </div>
                <span className='icon'>
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </span>
            </div>

        </div>
    )
} 