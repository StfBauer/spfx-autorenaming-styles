require('BootstrapWebPart.css');

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'bootstrapWebPartStrings';
import BootstrapWebPart, { IBootstrapWebPartProps } from './components/BootstrapWebPart';
import { IBootstrapWebPartWebPartProps } from './IBootstrapWebPartWebPartProps';

export default class BootstrapWebPartWebPart extends BaseClientSideWebPart<IBootstrapWebPartWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<IBootstrapWebPartProps> = React.createElement(BootstrapWebPart, {
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
