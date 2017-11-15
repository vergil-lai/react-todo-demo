import React, { Component } from 'react';

import {view as Todos} from './todos';
import {view as Filter} from './filter';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';


class TodoApp extends Component {

  render() {
    return (
      <section className="todoapp">
        <Todos />
        <Filter />
      </section>
    )
  }
}

export default TodoApp;