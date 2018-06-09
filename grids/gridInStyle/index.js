import React from 'react';
import { Header, Layout, Dashboard, Footer } from './style';

const GridInStyle = ({name}) => {
    return(
        <Layout>
            <Header>
                The Serverless Component
            </Header>
            <Dashboard>
                {`Welcome to ${name}`}
            </Dashboard>
            <Footer>
                The ending is this
            </Footer>
        </Layout>
    );
};

GridInStyle.defaultProps = {
    name: "Serverless React Component"
}

export default GridInStyle;