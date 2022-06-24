import ListItemForm from './ListItemForm';
import classes from './TaskItem.module.css';

const TaskItem = (props) => {
    return (
        <li className={classes.item}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.date}>{props.date}</div>
            </div>
            <div>
                <ListItemForm/>
            </div>
        </li>
    );
};

export default TaskItem;