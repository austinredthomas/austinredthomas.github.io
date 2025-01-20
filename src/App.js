import React from 'react';
import 'global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

// NOTE(jimmylee): This is a kitchen sink of all components.
// When forking or remixing, you'll likely only need a few.
import ActionBar from '@components/ActionBar';

export const dynamic = 'force-static';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>What is up dudes!</h1>
      <p>This is the beginning of something awesome.</p>
    </div>
  );
}

export default App;

