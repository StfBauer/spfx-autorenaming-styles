import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import { IBootstrapWebPartWebPartProps } from '../IBootstrapWebPartWebPartProps';

export interface IBootstrapWebPartProps extends IBootstrapWebPartWebPartProps {
}

export default class BootstrapWebPart extends React.Component<IBootstrapWebPartProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="mybootstrapwebpart">
          <button type="button" className="btn btn-default" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Default</button>
          <button type="button" className="btn btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
          <button type="button" className="btn btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
          <button type="button" className="btn btn-info" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
          <button type="button" className="btn btn-warning" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
          <button type="button" className="btn btn-danger" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
      </div>
    );
  }
}
