import styled from 'styled-components';

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;
    grid-template-areas: "header" 
                         "dashboard" 
                         "footer";
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-area: header;
`;

export const Dashboard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-area: dashboard;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-area: footer;
`;