declare interface IDefaultHelloWorldWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'defaultHelloWorldWebPartStrings' {
  const strings: IDefaultHelloWorldWebPartStrings;
  export = strings;
}
