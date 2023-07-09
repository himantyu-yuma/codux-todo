import styles from './todo-list.module.scss';
import classNames from 'classnames';
import { Todo } from '../todo';

export interface TodoListProps {
    className?: string;
    tasks: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TodoList = ({ className, tasks }: TodoListProps) => {
    return (
        <div className={classNames(styles.root, className, styles['todo-list'])}>
            {tasks.map((task) => (
                <Todo key={task} taskName={task} />
            ))}
        </div>
    );
};
