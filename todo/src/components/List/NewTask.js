import classes from './NewTask.module.css';
import Input from './../UI/Input';

const NewTask = props => {
    return (
        <form className={classes.newtask}>
            <Input label='New Tasks' 
                input={{ id:'id_' + props.id, type:'text',}}/>
            <button>submit</button>
        </form>
    );
};

export default NewTask;