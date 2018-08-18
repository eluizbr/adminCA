export interface Link {
  label: string;
  link: string;
}

export interface MenuItem {
  label: string;
  icon: string;
  links: Link[];
}

export interface Menu {
  recurso?: string;
  icon?: string;
  heading?: string;
  menuItem?: MenuItem[];
}
