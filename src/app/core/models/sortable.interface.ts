import { SortDirection } from './direction.enum';

export interface ISortable {
    direction: string;
    column: string;
    getSortDirection(): SortDirection;
    getSortColumn(): string;
    asKeyValue(): { [key: string]: string };
  }