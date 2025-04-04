import React from 'react';
//import '../styles/AgeDemographic.css';

const AgeDemographic = () => {
  return (
    <div className="age-demographic-container">
      <h2>Tourism Age Demographics</h2>
      <div className="flourish-visualization">
        <iframe 
          src='https://flo.uri.sh/visualisation/22473334/embed' 
          title='Interactive or visual content' 
          className='flourish-embed-iframe' 
          frameBorder='0' 
          scrolling='no' 
          style={{width:'100%', height:'600px'}}
          sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
        ></iframe>
      </div>
    </div>
  );
};

export default AgeDemographic;