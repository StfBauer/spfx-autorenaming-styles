declare interface IDisabledAutoPrefixStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'disabledAutoPrefixStrings' {
  const strings: IDisabledAutoPrefixStrings;
  export = strings;
}
