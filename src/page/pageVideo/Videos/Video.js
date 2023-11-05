import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import "./Video.css"
import { useParams } from 'react-router-dom';

const Videos = () => {
  const { src } = useParams();
  return (
    <div>
      <Video autoPlay controls className="video">
        <source src={decodeURIComponent(src)} type='audio/mp3'  autoPlay controls />
      </Video>
    </div>
  );
}

export default Videos;
