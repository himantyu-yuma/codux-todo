import { useState } from 'react';
import styles from './App.module.scss';
import { TodoList } from './components/todo-list';
import { Button } from './components/button';

function App() {
    const [tasks, setTasks] = useState(['タスク-1']);

    const handleClickAddButton = () => {
        setTasks((prev) => [...prev, `タスク-${prev.length + 1}`]);
    };
    return (
        <div className={styles.App}>
            <div className={styles['button-wrapper']}>
                <Button label="追加" onClick={() => handleClickAddButton()} />
            </div>
            <TodoList tasks={tasks} />
        </div>
    );
}

export default App;
