import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './Card';
import { Container } from './styles/Container.styles';
import SwitchButton from './SwitchBtn';

const darkTheme = {
    mainBg: '#262626',
    cardBg: '#1e1e1e',
    textColor: '#fff',
};
const lightTheme = {
    mainBg: '#f0f2f5',
    cardBg: '#fff',
    textColor: '#111',
};

export default function Tutorial() {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Container>
                <Card />
                <SwitchButton changeTheme={changeTheme} theme={theme} />
            </Container>
        </ThemeProvider>
    );
}
