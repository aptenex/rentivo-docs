import React, { Component } from 'react';
import axios from 'axios';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    };
  }

  componentDidMount() {
    // this.setState({"status" : {"page":{"id":"17tj22rsgn9f","name":"Rentivo","url":"https://rentivo.statuspage.io","time_zone":"Etc/UTC","updated_at":"2020-03-18T11:24:05.263Z"},"status":{"indicator":"minor","description":"Partially Degraded Service"}}});
    // Not using StatusPage.io just yet.
    // axios.get('https://17tj22rsgn9f.statuspage.io/api/v2/status.json')
    //   .then(res => {
    //     this.setState({
    //       status: res.data,
    //     });
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    const {
      status,
      page,
    } = this.state.status;

    if (!this.state.status || status.indicator === 'none') {
      return null;
    }

    const alertType = status.indicator === 'minor' ? 'warning' : 'danger';

    return (
      <div className={`alert alert-${alertType} sendgrid-status`}>
        <p><i className="sg-icon sg-icon-info-circle" /> <strong>{status.description}. <a href={page.url}>Learn More</a></strong></p>
      </div>
    );
  }
}

export default MainLayout;
