import { createBoard } from '@wixc3/react-board';
import { TodoList } from '../../../components/todo-list/todo-list';

export default createBoard({
    name: 'TodoList',
    Board: () => <TodoList tasks={['sample1', 'sample2']} />,
    environmentProps: {
        canvasWidth: 733,
    },
});
