import * as React from 'react';
import { css } from 'office-ui-fabric-react';

// remove this line below because the styles is not needed anymore
// import styles from '../DisabledAutoPrefix.module.scss';
import { IDisabledAutoPrefixWebPartProps } from '../IDisabledAutoPrefixWebPartProps';

export interface IDisabledAutoPrefixProps extends IDisabledAutoPrefixWebPartProps {
}

export default class DisabledAutoPrefix extends React.Component<IDisabledAutoPrefixProps, {}> {
  public render(): JSX.Element {
    return (
      <div className='disabledAutoPrefix_1bdee758'>
        <div className='container'>
          <div className='ms-Grid-row ms-bgColor-themeDark ms-fontColor-white row'>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                Welcome to SharePoint!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                {this.props.description}
              </p>
              <a
                className='ms-Button'
                href='https://github.com/SharePoint/sp-dev-docs/wiki'
              >
                <span className='ms-Button-label'>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


