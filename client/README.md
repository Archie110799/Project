# Getting Started with Create React App (https://create-react-app.dev/docs/adding-typescript/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Install

## Language

- I18n (https://react.i18next.com/guides/quick-start)
  npm install react-i18next i18next --save

## Framework

- Bootstrap (https://getbootstrap.com/docs/5.0/getting-started/introduction/)
  npm install bootstrap

## Package

- React Router (https://reactrouter.com/en/main)
  npm install react-router-dom

- Redux (https://redux.js.org/introduction/getting-started)
- Redux toolkit (https://redux-toolkit.js.org/usage/usage-with-typescript)
  npm install redux react-redux @reduxjs/toolkit @types/redux-logger

### Note: Toolkit useAppDispatch & useAppSelector

- Declare
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
  export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
- Usage
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: AppState) => state.xxx);
