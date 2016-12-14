require('DisabledAutoPrefix.css');

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'disabledAutoPrefixStrings';
import DisabledAutoPrefix, { IDisabledAutoPrefixProps } from './components/DisabledAutoPrefix';
import { IDisabledAutoPrefixWebPartProps } from './IDisabledAutoPrefixWebPartProps';

export default class DisabledAutoPrefixWebPart extends BaseClientSideWebPart<IDisabledAutoPrefixWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<IDisabledAutoPrefixProps> = React.createElement(DisabledAutoPrefix, {
      description: this.properties.description
    });

    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
