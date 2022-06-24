import Listbox from '../UI/Listbox';
import TaskItem from './ListItem/TaskItem';
import classes from './Task.module.css';

const DUMMY_TASK = [
    {
        id: "1",
        title: "Finish login",
        description: "user signup and sign on function",
        date: "25/06/2022"
    },
    {
        id: "2",
        title: "Add backend",
        description: "add firebase",
        date: "25/06/2022"
    },
    {
        id: "3",
        title: "Deploy app",
        description: "deploy app and add to portfolio page",
        date: "25/06/2022"
    },
]

const Task = () => {
    const taskList = DUMMY_TASK.map(task => 
        <TaskItem 
            key={task.id} 
            title={task.title} 
            description={task.description} 
            date={task.date}/>);

    return (<section className={classes.task}>
        <Listbox>
          <ul>{taskList}</ul>  
        </Listbox>
    </section>
    );
};

export default Task;
