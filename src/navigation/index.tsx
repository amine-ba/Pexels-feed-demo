import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList, AppStacks } from './screens';
import ImagesFeed from 'screens/ImagesFeed/ImagesFeed';
import ImageDetails from 'screens/ImageDetails/ImageDetails';

const Stack = createNativeStackNavigator<AppStackParamList>();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppStacks.ImagesFeed} component={ImagesFeed} />
      <Stack.Screen
        name={AppStacks.ImageDetails}
        component={ImageDetails}
        options={{ headerShown: true, title: 'Details' }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
