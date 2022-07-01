import classes from './ListItemForm.module.css';

const ListItemForm = (props) => {
    return (
        <form className={classes.form}>
            <button>done</button>
            <button>delete</button>
        </form>
    );
};

export default ListItemForm;