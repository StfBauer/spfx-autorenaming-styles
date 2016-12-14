declare interface IWithoutBootstrapStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'withoutBootstrapStrings' {
  const strings: IWithoutBootstrapStrings;
  export = strings;
}
