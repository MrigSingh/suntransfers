import React from 'react';
import './header.css';
import usaLogo from '../../images/usa-flag.png';
import dropdown from '../../images/dropdown.png';
import euro from '../../images/euro.svg';


class Header extends React.Component{
    render(){
        return(<div>
            <header className="App-header">
                <div className="logo-container">
                    <p className="logo-text"><i>Suntransfers</i><span className="logo-text-sec">.com</span></p>
                </div>
                <div className="navbar-agencies">
                <p>Agencies</p>
                </div>
                <div className="navbar-help">
                <p>Help Center</p>
                </div>
                <div className="navbar-english">
                <img className='english-logo' alt="english" src={usaLogo}/>
                <p>English</p>
                <img className="dropdown-logo" alt="dropdown" src={dropdown} />
                </div>
                <div className="navbar-euro">
                <img className='euro-logo' alt="euro" src={euro}/>
                <p>EUR</p>
                <img className="dropdown-logo" alt="dropdown" src={dropdown} />
                </div>
                <div className="navbar-button">
                <p className='btn-text'>My booking</p>
                </div>
            </header>
        </div>)
    }
}
export default Header;