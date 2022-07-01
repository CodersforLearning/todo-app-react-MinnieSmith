import {Fragment} from 'react';
import colab from '../../assets/colab.jpg'
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>TODO</h1>
        </header>
        <div className={classes['main-image']}>
            <img src={colab} alt='this is how we roll!' />
        </div>
    </Fragment>
};

export default Header;