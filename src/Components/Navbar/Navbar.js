import React, { Component } from 'react'
import "./Navbar.css";
import {Button} from '../Button/Button'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    state = {
        open: false
      };
    
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    

    render() {
        const { open } = this.state;
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">S<span>f</span>UIT</h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a className="nav-links" href="#" onClick={this.onOpenModal}>
                        <i className="fas fa-bell"></i> Notifications
                    </a>
                </li>
                <li>
                    <a className="nav-links" href="#">
                        <i className="fas fa-user"></i> John Doe
                    </a>
                </li>
                
                <li>
                    <a className="nav-links-mobile" href="#">
                        Logout <i class="fas fa-sign-out-alt"></i>
                    </a>
                </li>
            </ul>
            <Button>Logout <i class="fas fa-sign-out-alt"></i></Button>
            
            <Modal open={open} onClose={this.onCloseModal} className="popup">
                <div>
                    <h3 className="mt_30 name">High Teperature</h3>
                    <p className="para">
                        It feels like you have fever, please check yourselves!!
                    </p>
                    <div className="line"></div>
                </div>
                <div className="center">
                    <a href="#" className="allnotify">View all Notifications</a>
                </div>
            </Modal>
        </nav>
    )
    }
}

export default Navbar