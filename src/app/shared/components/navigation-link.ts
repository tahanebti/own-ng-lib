export class NavigationLink {
      public text: string
      public url?: string | string[]
      public iconClass?: string
      public active?: boolean
      public submenu?: { name: string, url: string }[]
      public menuTitle?: boolean
  }

  
  export type Config = {
    // selector?: String,
    multi?: boolean
  };