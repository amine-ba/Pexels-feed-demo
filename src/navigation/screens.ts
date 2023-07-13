import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Photo } from 'pexels';

export enum AppStacks {
  ImagesFeed = 'ImagesFeed',
  ImageDetails = 'ImageDetails',
}

export type AppStackParamList = {
  [AppStacks.ImagesFeed]: undefined;
  [AppStacks.ImageDetails]: { photo: Photo };
};

export type MainStackNavigationProps =
  NativeStackNavigationProp<AppStackParamList>;

export const useMainNavigation = () =>
  useNavigation<MainStackNavigationProps>();
