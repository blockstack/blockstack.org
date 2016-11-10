'use strict'

import {Component, PropTypes}  from 'react'
import {Link} from 'react-router'

const propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  body: PropTypes.string,
  imageSrc: PropTypes.string,
  footnote: PropTypes.string,
  cardsPerRow: PropTypes.number,
  onClick: PropTypes.func
}

class CardLink extends Component {

  constructor(props) {
    super(props)

    this.getCardClass = this.getCardClass.bind(this)
  }

  getCardClass() {
    let cardClass = {}
    switch (this.props.cardsPerRow) {
      case 1:
        cardClass = 'card-1-of-1'
        break
      case 2:
        cardClass = 'card-1-of-2'
        console.log('1 of 2')
        break
      case 3:
        cardClass = 'card-1-of-3'
        console.log('1 of 3')
        break
      default:
        break
    }
    return cardClass
  }

  render() {
    return (
      <div className={`card ${this.getCardClass()}`}>
        <Link to={this.props.href} className="card-link">
          { this.props.imageSrc ?
          <div className="card-link-image-wrapper">
            <img src={this.props.imageSrc} className="card-img-top card-link-image" />
          </div>
          : null }
          <div className="card-block">
            <h4 className="card-title card-title-wrapped">
              {this.props.title}
            </h4>
            { this.props.body ?
            <p className="card-text">
              {this.props.body}
            </p>
            : null }
            { this.props.footnote ?
            <p className="card-text">
              <small className="text-muted">
                {this.props.footnote}
              </small>
            </p>
            : null }
          </div>
        </Link>
      </div>
    )
  }

}

CardLink.propTypes = propTypes
export default CardLink