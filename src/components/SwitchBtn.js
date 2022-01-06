import React from 'react';
import { StyledThemeSwitcher } from './styles/Elements';

const SwitchBtn = ({ changeTheme, theme }) => (
    <StyledThemeSwitcher>
        <button type="button" onClick={changeTheme}>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            {theme === 'light' ? '🌙' : '💡'}
        </button>
    </StyledThemeSwitcher>
);

export default SwitchBtn;
