import 'input-pwd';
import React from 'react';

export default () => (
  <div>
    <input-pwd
      onClick={() => console.log('click')}
      style={{ marginRight: 4 }}
    />
    <input type="password" />
  </div>
);
