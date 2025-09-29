import React, { JSX } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import { Spacing } from '../styles';
import { useStringsContext } from './strings-context';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export const Context = React.createContext<boolean>(true);

const AppNetInfo = ({ children }: Props): JSX.Element => {
  const netInfo = useNetInfo();
  const { stringsData } = useStringsContext();
  return (
    <Context.Provider value={netInfo.isConnected || false}>
      {!netInfo.isConnected && (
        <>
          <SafeAreaView>
            <View style={styles.barStyle}>
              <Text style={styles.labelStyle}>{stringsData.noInternetConnection}</Text>
            </View>
          </SafeAreaView>
        </>
      )}
      {children}
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    padding: Spacing.size5,
    backgroundColor: colors.Generic.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: { color: colors.Text.white },
});

export default AppNetInfo;
