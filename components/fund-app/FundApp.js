import React, { Component } from 'react'


class Header extends Component {
  render() {
    return (
      <section className="fund-app py-4">
        <div className="container align-center">
          <h3 className="p main-color pb-3">Fund your dapp</h3>
          <p className="h2 main-color">
            We have funding available to support teams via our{' '}
            <a href={this.props.links.signatureFund}>Signature Fund</a>,{' '}
            <a href="https://contribute.blockstack.org/">
              Community Rewards Program
            </a>, and <a href="/blog">Active Bounties</a>.
          </p>
        </div>
      </section>
    )
  }
}

export default Header

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>
