import sytles from './task.module.css';
import {TbTrash} from 'react-icons/tb';
import {ITask} from '../../App';
import {BsFillCheckCircleFill} from 'react-icons/bs';

interface Props{
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({task, onDelete, onComplete}: Props){
    return (
        <div className={sytles.task}>
            <button className={sytles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill size={20}/> : <div/>}
            </button>
            <p className={task.isCompleted ? sytles.textCompleted : ""}>{task.title}</p>
            <button className={sytles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}