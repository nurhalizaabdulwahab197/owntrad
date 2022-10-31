import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.ReportRejectManufacturer = class extends React.Component {
  render() {
    return (
      <div>
        Retailer reject the item
      </div>
    );
  }
}
exports.ReportRejectRetailer = class extends React.Component {
  render() {
    return (
      <div>
       You reject the item
      </div>
    );
  }
}
exports.ReportTransferManufacturer = class extends React.Component {
  render() {
    const {payment} = this.props;
    return (
      <div>
       Retailer paid {payment} Algo to the contract <br/><br/>
       The contract paid {payment} Algo to you <br/><br/>
       Now Retailer own the item
      </div>
    );
  }
}
exports.ReportTransferRetailer = class extends React.Component {
  render() {
    const {payment} = this.props;
    return (
      <div>
       You paid {payment} Algo to the contract <br/><br/>
       Now you own the item
      </div>
    );
  }
}

export default exports;