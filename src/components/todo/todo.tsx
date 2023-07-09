import styles from './todo.module.scss';
import classNames from 'classnames';

export interface TodoProps {
    className?: string;
    taskName: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Todo = ({ className, taskName }: TodoProps) => {
    return (
        <div className={classNames(styles.root, className, styles['todo-card'])}>
            <label>
                <input type="checkbox" />
                {taskName}
            </label>
        </div>
    );
};
