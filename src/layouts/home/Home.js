import React, { Component } from 'react'
// UI Components
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js'
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'
import uPortLogo from '../../img/uport-logo.svg'
import Web3 from 'web3'

import '../../css/Login.css'

class Home extends Component {

  componentDidMount() {

    if (typeof window.web3 === 'undefined') {
      // no web3, use fallback
      console.error("Please use a web3 browser");
    } else {
      // window.web3 == web3 most of the time. Don't override the provided,
      // web3, just wrap it in your Web3.
      var myWeb3 = new Web3(window.web3.currentProvider);

      // the default account doesn't seem to be persisted, copy it to our
      // new instance
      myWeb3.eth.defaultAccount = window.web3.eth.defaultAccount;

    }


    // App.contracts.Adoption.deployed().then(function(instance){
    //   adoptionInstance = instance;

    //   return adoptionInstance.adopt(petId, { from:account});
    // }).then(function(result) {
    //   return App.markAdopted();
    // }).catch(function(err){
    //   console.log(err.message);
    // });


  }

  render() {

    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <LoginButtonContainer/>
      </span>
    )

    return(
      <main className="container">
        <div id="Login">
          <h1>Ripe</h1>
          <p>The food rescue impact token.</p>
          <p>Your account: {window.web3.eth.defaultAccount}</p>
          <a href="/new_org" className="btn btn-primary">Food Rescue Organization</a><br/>
          <a href="/new_org" className="btn btn-primary">Grocer / Farm</a>
        </div>
      </main>
    )
  }
}

export default Home
