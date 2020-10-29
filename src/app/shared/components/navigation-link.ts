export class NavigationLink {
  
  constructor(
      public text: string,
      public url?: string | string[],
      public iconClass?: string,
      public active?: boolean,
      public submenu?: { name: string, url: string }[]
    ) {}
  }

  
  export type Config = {
    // selector?: String,
    multi?: boolean
  };