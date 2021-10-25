import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { defaultState } from "../defaultState";
import * as mutations from "./mutations";
import * as sagas from "./sagas.mock";

const sagaMiddleware = createSagaMiddleware();

const tasks = (tasks = defaultState.tasks, action) => {
  switch (action.type) {
    case mutations.CREATE_TASK:
      return [
        ...tasks,
        {
          id: action.taskId,
          name: "New Task",
          group: action.groupId,
          owner: action.ownerId,
          isComplete: false,
        },
      ];
    case mutations.SET_TASK_COMPLETE:
      return tasks.map(task =>
        task.id === action.taskId
          ? { ...task, isComplete: action.isComplete }
          : task
      );
    case mutations.SET_TASK_NAME:
      return tasks.map(task =>
        task.id === action.taskId ? { ...task, name: action.name } : task
      );
    case mutations.SET_TASK_GROUP:
      return tasks.map(task =>
        task.id === action.taskId ? { ...task, groupId: action.groupId } : task
      );
    default:
      break;
  }
  return tasks;
};

const comments = (comments = defaultState.comments) => {
  return comments;
};

const groups = (groups = defaultState.groups) => {
  return groups;
};

export const store = createStore(
  combineReducers({ tasks, comments, groups }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) sagaMiddleware.run(sagas[saga]);
