import React, { Component } from 'react'
// import web3 from '../../util/connectors.js'
// import Web3 from 'web3'

import '../../css/Dashboard.css'

class NewOrg extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    // check if organization exisits.. if not, create a new one
    // App.web3Provider = 
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

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
        <h1 className="go">Please register as an org.</h1>
        <form action="">
          <div className="form-group">
            <label for="pounds">Organization name</label>
            <input type="text" className="form-control" id="org_name" placeholder="Denver Food Rescue" />
          </div>
        </form>
      </div>
  )
  }
}

export default NewOrg
