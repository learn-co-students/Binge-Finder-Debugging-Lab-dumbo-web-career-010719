import React from 'react';

const Episode = (props) => {
  console.log(props);

  return (
    <div>
      Episode {props.eachEpisode.number} - {props.eachEpisode.name}
    </div>
  )
}

export default Episode;
