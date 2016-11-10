'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import EmbedSpeakerDeck from '../components/EmbedSpeakerDeck'
import EmbedYouTube     from '../components/EmbedYouTube'

class TalksPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      talks: [
        {
          title: "Decentralized, Server-less Applications with Blockstack",
          event: "All Things Open",
          speaker: "Ryan Shea",
          location: "Raleigh, NC",
          date: "October 27, 2016",
          youtube: {
            embedURL: "https://www.youtube.com/embed/WveXpldGGa8",
          },
          speakerDeck: {
            dataID: "434d4f23ad40417aadfe86643671a5bd",
            dataRatio: "1.77777777777778",
          },
        },
        {
          title: "Experiences with Building a Global PKI with Blockchains",
          event: "CITP Luncheon Speaker Series",
          speaker: "Muneeb Ali",
          location: "Princeton, NJ",
          date: "March 8, 2016",
          youtube: {
            embedURL: "https://www.youtube.com/embed/sBJobY0Aqt0",
          },
          speakerDeck: {
            dataID: "e7608b083c5d4ef68a199cd4f6b74026",
            dataRatio: "1.77777777777778",
          },
        },
      ]
    }
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container-fluid m-b-5">
                <div className="container">
                  <h1>
                    Blockstack Talks
                  </h1>
                </div>
                { this.state.talks.map((talk, index) => {
                  return (
                    <div className="m-b-3" key={index}>
                      <div className="container">
                        <p>
                          <b>Date:</b> {talk.date}
                          <br/>
                          <b>Title:</b> {talk.title}
                          <br/>
                          <b>Event:</b> {talk.event}
                          <br/>
                          <b>Speaker:</b> {talk.speaker}
                          <br/>
                          <b>Location:</b> {talk.location}
                        </p>
                      </div>
                      <div className="row">
                        { talk.youtube ?
                        <div className="col-md-6">
                          <EmbedYouTube src={talk.youtube.embedURL} />
                        </div>
                        : null }
                        { talk.speakerDeck ?
                        <div className="col-md-6">
                          <EmbedSpeakerDeck
                            dataID={talk.speakerDeck.dataID}
                            dataRatio={talk.speakerDeck.dataRatio} />
                        </div>
                        : null }
                      </div>
                    </div>
                  )
                }) }
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default TalksPage

/*
{
  title: "Building the New Internet",
  event: "TEDx New York",
  speaker: "Muneeb Ali",
  location: "New York, NY",
  date: "September 10, 2016",
  youtube: {
    embedURL: "https://www.youtube.com/embed/zmWIMiED9cE"
  },
  speakerDeck: {
    dataID: "96df091e173e4f03b2c39e79c9b37220",
    dataRatio: "1.77777777777778",
  }
}
*/