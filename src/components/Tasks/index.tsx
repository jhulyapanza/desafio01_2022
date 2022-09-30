import sytles from './tasks.module.css';
import {Task} from "../Task";
import {ITask} from "../../App";
import {TbClipboardText} from "react-icons/all";

interface Props{
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;

}
export function Tasks({tasks, onDelete, onComplete}: Props){
    const taskQtd = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    return(
        <section className={sytles.tasks}>
            <header className={sytles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskQtd}</span>
                </div>

                <div>
                    <p className={sytles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {taskQtd}</span>
                </div>
            </header>
            <div className={sytles.list}>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}

                {tasks.length <= 0 && (
                   <section className={sytles.empty}>
                       <TbClipboardText size={50}/>
                       <div>
                           <p>Você ainda não tem tarefas cadastradas</p>
                           <span>Crie tarefas e organize seus itens a fazer</span>
                       </div>
                   </section>
                )};
            </div>
        </section>
    )
}