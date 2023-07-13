import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from 'navigation';
import React from 'react';
import { FlexSafeAreaView } from 'styles/shared';

const App = () => {
  return (
    <NavigationContainer>
      <FlexSafeAreaView>
        <MainStackNavigation />
      </FlexSafeAreaView>
    </NavigationContainer>
  );
};

export default App;
