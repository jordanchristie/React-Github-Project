import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import Routes from './Routes/Routes';
import * as styles from './Style/style.css';




render(<Routes style={styles} />, document.getElementById('root'));
