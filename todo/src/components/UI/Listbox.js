import classes from './Listbox.module.css';

const Listbox = props => {
    return <div className={classes.listbox}>{props.children}</div>
};

export default Listbox;