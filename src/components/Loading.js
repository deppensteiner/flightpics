import React from 'react';
import Icon from './Icon';

import './css/loading.css';

const Loading = () => {
  return (
    <div className="circular_blue">
      <div className="style1">
        <div className="style2">
          <Icon id="plane" className="footer-plane-icon style3" />
        </div>
      </div>
    </div>
  )  
}

export default Loading;
