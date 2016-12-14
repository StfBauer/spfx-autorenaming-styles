import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'defaultHelloWorldWebPartStrings';
import DefaultHelloWorldWebPart, { IDefaultHelloWorldWebPartProps } from './components/DefaultHelloWorldWebPart';
import { IDefaultHelloWorldWebPartWebPartProps } from './IDefaultHelloWorldWebPartWebPartProps';

export default class DefaultHelloWorldWebPartWebPart extends BaseClientSideWebPart<IDefaultHelloWorldWebPartWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<IDefaultHelloWorldWebPartProps> = React.createElement(DefaultHelloWorldWebPart, {
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
