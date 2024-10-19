import { EventEmitter } from 'events';
import taskDispatcher from './Dispatcher';
import { addTask, removeTask, toggleTask } from './taskActions';

class TaskStore extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  handleAction(action) {
    switch (action.type) {
      case 'ADD_TASK':
        this.tasks.push({ id: Date.now(), text: action.payload, completed: false });
        this.emit('change');
        break;
      case 'REMOVE_TASK':
        this.tasks = this.tasks.filter((task) => task.id !== action.payload);
        this.emit('change');
        break;
      case 'TOGGLE_TASK':
        this.tasks = this.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
        this.emit('change');
        break;
      default:
        break;
    }
  }
}

const taskStore = new TaskStore();
taskDispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;
