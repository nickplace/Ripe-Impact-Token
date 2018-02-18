import React, { Component } from 'react'
// import web3 from '../../util/connectors.js'

import '../../css/Dashboard.css'

class Organization extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    // check if organization exisits.. if not, create a new one
    // App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');

    // web3.eth.getAccounts(function(error, accounts) {
    //   if (error) {
    //     console.log(error);
    //   }
      
    //   var account = accounts[0];
    //   console.log(accounts[0]);

      // App.contracts.RipeToken.deployed().then(function(instance){
      //   adoptionInstance = instance;

      //   return adoptionInstance.adopt(petId, { from:account});
      // }).then(function(result) {
      //   return App.markAdopted();
      // }).catch(function(err){
      //   console.log(err.message);
      // });
    // });


  }

  render() {
    return(
      <div id="Dashboard">
        <div className="id">
          <p className="role">Food rescue organization</p>
          <h1>Jason Vigil</h1>
          <p>15ACRN</p>
          <a href="/new" className="btn btn-primary">New donation</a>
        </div>
        <div className="notifications">
          <ul className="list-group">
            <li className="list-group-item group-header">Notifications</li>
            <li className="list-group-item">Grocery store waiting on your pickup</li>
            <li className="list-group-item">You're waiting on a grocery store's confirmation</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item group-header">Your impact ledger</li>
            <li className="list-group-item">1/2/18 - 80lbs</li>
            <li className="list-group-item">2/20/18 - 20lbs</li>
          </ul>
        </div>
      </div>
  )
  }
}

export default Organization
