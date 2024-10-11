import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
    const [button, onClickb] = useState(null)

    return <div className="btn-group" role="group">
        <button type="button" className={`btn btn-secondary left ${button === 'left' ? 'active' : ''}`} onClick={() => onClickb('left')}>Left</button>
        <button type="button" className={`btn btn-secondary right ${button === 'right' ? 'active' : ''}`} onClick={() => onClickb('right')}>Right</button>
    </div>;
  // END
};

export default BtnGroup;