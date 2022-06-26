import classes from './NewTask.module.css';
import Input from './../UI/Input';

const NewTask = () => {
    return (
        <form className={classes.newtask}>
            <Input label='New Tasks' 
                input={{ id:'id', type:'text',}}/>
        </form>
    );
};

export default NewTask;