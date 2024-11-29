import { FC, useEffect, useState } from 'react';
import {
  ColorScheme, ColorSchemeProvider, Grid, MantineProvider
  // Import the necessary components from Mantine
} from '@mantine/core';

type Language = 'en' | 'es' | 'pt'; // Define the type for language to limit values
type HomeProps = {
  theme?: string; // Optional prop for theme: 'light' or 'dark'
  lang?: Language; // Optional prop for language: 'en', 'es', or 'pt'
};
// from main microapp website theme and language will be passed as props
// we can use these props to set the theme and language of the microapp
const Home: React.FC<HomeProps> = (props) => {
  // Store the props.theme value in a state variable with default 'light'
  const [appTheme, setAppTheme] = useState<string>(props.theme || 'light');
  // State for managing selected language with default 'en' (English)
  const [appLang, setAppLang] = useState<Language>(props.lang || 'en');

  // Function to toggle the theme between 'light' and 'dark'
  const toggleColorScheme = (value?: ColorScheme) => {
    setAppTheme(value === 'dark' ? 'dark' : 'light');
  };
  // useEffect to update the theme state when the props.theme changes
  useEffect(() => {
    if (props.theme) {
      toggleColorScheme(props.theme === 'dark' ? 'dark' : 'light');
    }
  }, [props.theme]);
  useEffect(() => {
    if (props.lang) {
      setAppLang(props.lang);
    }
  }, [props.lang]);
  // Handle change in props as per your requirement


  /************************
    WRITE YOUR CODE HERE
  *************************/

  return (
    // Wrap the app inside ColorSchemeProvider to handle theme toggling (light/dark mode)
    <ColorSchemeProvider
      colorScheme={appTheme === 'dark' ? 'dark' : 'light'} // Pass the current theme
      toggleColorScheme={() => { }} // You can implement this if you want to toggle theme in the app
    >
      {/* MantineProvider is used to apply the selected theme with global styles */}
      <MantineProvider
        theme={{ colorScheme: appTheme === 'dark' ? 'dark' : 'light' }} // Apply theme based on state
        withGlobalStyles
        withNormalizeCSS
      >
        <Grid h={'100%'} m={0}>
          <Grid.Col
            sx={(theme) => ({
              boxShadow: theme.shadows.md,
              backgroundColor: '#FDFDFD',
              borderRight: '1px solid',
              borderColor: '#D9D9D9',
            })}
            sm={6}
          >
            {/* Display the home page text in the selected language */}
            {translations[appLang].HOME_TEXT}
            <h1>tchesa/microapp-boilerplate</h1>
          </Grid.Col>
        </Grid>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

// Translations object for supporting multiple languages

const translations = {
  en: {
    HOME_TEXT: 'Welcome to the Home Page', // English
  },
  es: {
    HOME_TEXT: 'Bienvenido a la página de inicio', // Spanish
  },
  pt: {
    HOME_TEXT: 'Bem-vindo à página inicial', // Portuguese
  },
};



export default Home;
