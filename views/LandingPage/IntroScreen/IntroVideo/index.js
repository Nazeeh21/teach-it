import React from 'react'
// import "node_modules/video-react/dist/video-react.css"; // import css

import { Player} from 'video-react';

const Index = () => {
  return (
    <Player
    fluid={false}
      // width='100%'
      height='100%'
      playsInline
      muted='true'
      loop
      autoPlay='true'
      src='/video.mp4'
      // src="/https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
      />
  );
};

export default Index;