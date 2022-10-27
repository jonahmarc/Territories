import React from 'react';

import './home.styles.css';
import { Stack, Dropdown } from 'react-bootstrap';

class Home extends React.Component {

    render() {
        return (
            <Stack className='home_container'>
                <h1>Territories</h1>
                <h6>Here are the list of territories.</h6>
            </Stack>
        );
    }
}

export default Home;