import { SharedValue } from 'react-native-reanimated';

export type TItem = {
  title: string;
};

export interface IDisappearingListItem {
  animationSharedValue: SharedValue<number>;
  height: number;
  index: number;
  item: TItem;
  listHeight: number;
}
