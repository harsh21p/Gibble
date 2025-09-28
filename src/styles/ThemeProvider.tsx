import React, { useEffect, useState, useCallback } from 'react';
import { getStorageItem } from '../hooks/use-async-storage';
import locales from 'locales/asyncStorage';

import {
  bTheme,
  aTheme,
  Colors,
} from './colorThemes';

export interface Theme {
  themeSelected: string;
  themeColors: Colors;
  setScheme: (
    val:
      | 'red'
      | 'blue'
      | 'yellow'
      | 'Red-Orange'
      | 'Purple-Red'
  ) => void;
}

export const ThemeContext = React.createContext<Theme>({
  themeSelected: 'red',
  themeColors: aTheme,
  setScheme: () => { },
});

export const ThemeProvider: React.FC<{}> = props => {
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const _retrieveData = useCallback(async () => {
    try {
      const appTheme = await getStorageItem(locales.KEY_APP_THEME);
      console.log('@CURRENT...THEME...', appTheme)
      if (appTheme !== null && appTheme !== '') {
        setSelectedTheme(appTheme);
      }
    } catch (error) {
      console.log('@CURRENT...THEME...', error)
    }
  }, []);

  useEffect(() => {
    _retrieveData();
  }, []);

  const getTheme = (theme: string): Colors => {
    if (theme !== '') {
      try {
        switch (theme) {
          case 'default-theme':
            return bTheme;
          case 'blue':
            return aTheme;
         
          default:
            return aTheme;
        }
      } catch (error) {
        // Error retrieving data
      }
    } else {
      return aTheme;
    }
  };

  const defaultTheme: Theme = {
    themeColors: getTheme(selectedTheme),
    themeSelected: selectedTheme,
    setScheme: scheme => setSelectedTheme(scheme),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
