export interface IInfiniteScrollListProps<T> {
  data?: T[];
  height: number;
  onEndReached: () => void;
}

export interface IItem {
  title: string;
}
