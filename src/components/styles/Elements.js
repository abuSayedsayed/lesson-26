import styled from 'styled-components';

export const Tag = styled.span`
    display: inline-block;
    color: #fff;
    background: ${(props) => props.color};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const H1 = styled.h1`
    color: ${({ theme }) => theme.textColor};
`;

export const P = styled.p`
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    color: #aaa;
    margin: 20px 0;
`;

export const Image = styled.img`
    position: absolute;
    top: 30px;
    right: -20px;
    z-index: 0;
`;

export const StyledThemeSwitcher = styled.div`
    position: absolute;
    top: 2%;
    right: 5%;
    background-color: transparent;
    & button {
        background-color: #2e2e2e;
        font-size: 16px;
        border-radius: 50px;
        padding: 4px 8px;
        border: 1px solid #333;
        font-weight: bold;
        cursor: pointer;
    }
`;
