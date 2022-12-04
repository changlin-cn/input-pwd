import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'input-pwd': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
