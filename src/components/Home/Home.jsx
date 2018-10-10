import React from 'react';

import '../Home/Home.scss';
import YoutubeEmbedVideo from "youtube-embed-video";
class Home extends React.Component {
  render() {
    return (
      <div className="page-container">
          <div className="home-qoute">
          <h2>"Believe in the light while you have the light, so that you may become children of light.”</h2>
          </div>
          <div className="featured-video">
          <YoutubeEmbedVideo videoId="z5uFIgDc1YI" size={"small"} suggestions={false} />
          <p>Last July 8, the Metro Manila churches of ICOC Philippines celebrated its 29th anniversary in SMX Mall of Asia. One of the highlights of the worship celebration is the appointment of the first elders in the Philippine churches, a teacher, an evangelist, and a women's ministry leader.</p>
          </div>
      </div>
    );
  }
}

export default Home;