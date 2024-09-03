import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import AppView from '../views/AppView';

function getStores() {
  return [TodoStore];
}

function getState() {
  return {
    todos: TodoStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);

TodoActions.addTodo('My first task');
