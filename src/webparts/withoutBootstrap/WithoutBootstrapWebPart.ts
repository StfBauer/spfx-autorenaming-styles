import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'withoutBootstrapStrings';
import WithoutBootstrap, { IWithoutBootstrapProps } from './components/WithoutBootstrap';
import { IWithoutBootstrapWebPartProps } from './IWithoutBootstrapWebPartProps';

export default class WithoutBootstrapWebPart extends BaseClientSideWebPart<IWithoutBootstrapWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<IWithoutBootstrapProps> = React.createElement(WithoutBootstrap, {
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
