import { Component, PropTypes } from 'react'
import {Link}        from 'react-router'

class JobListing extends Component {
  static propTypes: {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row mb-3">
        <div className="col-md-6">
          {this.props.title}
        </div>
        <div className="col-md-6">
            <Link to={this.props.url} target="_blank"
                  className="btn btn-primary btn-sm">
              Read More
            </Link>
        </div>
      </div>
    )
  }
}

export default JobListing