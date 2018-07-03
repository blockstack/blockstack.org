'use strict'

import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

const WhatIsBlockstack = () => {
  return (
    <DocumentTitle title="What is Blockstack?">
      <div>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="page-heading mx-auto">What is Blockstack?</h1>
            <p className="mb-5 mx-auto page-heading-subtext">
              Blockstack is a new internet for decentralized apps where users
              own their data. Blockstack{`'`}s platform helps entrepreneurs and
              engineers build these apps and deliver better end-user
              experiences.
            </p>
            <Link
              to="install"
              className="btn btn-primary d-none d-sm-inline-block"
            >
              Download Blockstack
            </Link>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="text-center page-heading mx-auto">How it works</h2>
            <div className="feature">
              <div className="feature-number">1</div>
              <div className="feature-body">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="font-weight-bold">
                      Explore a new world of decentralized apps
                    </h2>
                    <p>
                      Join our community as we re-envision apps for social,
                      gaming, finance, and everything in between.
                    </p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img src="/images/visuals/dev.png" />
                  </div>
                </div>
                <div className="feature-benefits">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="font-weight-bold">For users</h5>
                      <ul className="pl-3">
                        <li>
                          Discover the latest decentralized apps on the
                          Blockstack platform.
                        </li>
                        <li>Use your trusted ID across all your apps.</li>
                        <li>Share and manage your data how you want.</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="font-weight-bold">For developers</h5>
                      <ul className="pl-3">
                        <li>
                          Join an active community driven by decentralized
                          philosophy.
                        </li>
                        <li>
                          Distribute apps quickly with our development platform.
                        </li>
                        <li>
                          Get in early on building with Web 3.0 technology.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-number">2</div>
              <div className="feature-body">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="font-weight-bold">Truly own your data</h2>
                    <p>
                      Web corporations today assume complete ownership over your
                      data and abuse it for their benefit. With Blockstack, we
                      simplify data ownership and give you back control.
                    </p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img src="/images/visuals/storage.png" />
                  </div>
                </div>
                <div className="feature-benefits">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="font-weight-bold">For users</h5>
                      <ul className="pl-3">
                        <li>
                          Choose where to store your data, whether on a cloud
                          provider or your own personal server.
                        </li>
                        <li>Decide who has access to your data and when.</li>
                        <li>
                          Relax knowing your data is end-to-end encrypted with
                          keys that only you hold.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="font-weight-bold">For developers</h5>
                      <ul className="pl-3">
                        <li>Build serverless apps easier than ever before.</li>
                        <li>
                          Streamline your application code by using Blockstack
                          auth and storage services.
                        </li>
                        <li>
                          Don't worry about data liability since users provide
                          their encrypted data.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-number">3</div>
              <div className="feature-body">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="font-weight-bold">
                      Access infinite apps with a single account
                    </h2>
                    <p>
                      Your Blockstack ID is your login for Blockstack apps. By
                      verifying identities on other social platforms, users can
                      be confident they're interacting with trusted people in
                      their network. Under the hood, Blockstack creates a unique
                      blockchain record for each user identity created.
                    </p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img src="/images/visuals/identity.png" />
                  </div>
                </div>
                <div className="feature-benefits">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="font-weight-bold">For users</h5>
                      <ul className="pl-3">
                        <li>
                          Log in to every app safely with the same account.
                        </li>
                        <li>
                          Quickly check that people you interact with are
                          trustworthy.
                        </li>
                        <li>
                          Add verifications to your profile to increase your
                          trust rating.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="font-weight-bold">For developers</h5>
                      <ul className="pl-3">
                        <li>Take the pain out of managing user accounts.</li>
                        <li>
                          Access meta information like social URLs, email
                          addresses, and more.
                        </li>
                        <li>
                          Leverage an easy to use account search API to connect
                          users to one another.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="jumbotron jumbotron-white jumbotron-fluid text-center">
          <div className="container">
            <h1 className="page-heading mx-auto" style={{ maxWidth: '550px' }}>
              Join the new internet
            </h1>
            <p className="mb-5 mx-auto page-heading-subtext">
              We envision a decentralized internet where users take control of
              their own identity and data, without having to rely on
              intermediaries.
            </p>
            <Link to="/install" className="btn btn-primary">
              Download Blockstack
            </Link>
            <br />
            <Link to="/careers" className="btn btn-primary-outline mt-4">
              View our open positions
            </Link>
          </div>
        </section>

        <section className="cta-panel text-center text-left-md">
          <div className="container">
            <h2 className="page-heading mx-auto">Resources</h2>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-6 pb-5">
                <h5>Videos</h5>
                <p>
                  Our video section is a great place to find past presentations,
                  Q&amp;A sessions with cofounders Muneeb &amp; Ryan, and more.
                </p>
                <Link to="/videos" className="btn btn-outline-primary mt-3">
                  Watch videos
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 pb-5">
                <h5>Papers</h5>
                <p>
                  Our whitepapers are the best place to start for a technical
                  deep-dive into the Blockstack vision.
                </p>
                <Link to="/papers" className="btn btn-outline-primary mt-3">
                  Read whitepapers
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 pb-5">
                <h5>About Blockstack</h5>
                <p>
                  Read about our history, values, and core team. Find out why
                  we're a Public Benefit Corporation.
                </p>
                <Link to="/about" className="btn btn-outline-primary mt-3">
                  About Blockstack
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocumentTitle>
  )
}

export default WhatIsBlockstack
