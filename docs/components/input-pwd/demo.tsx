import 'input-pwd';
import React from 'react';

export default () => (
  <div>
    <input-pwd onClick={() => console.log('click')} />
    <input type="password" />
  </div>
);
