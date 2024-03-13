# React + Typescript + Vite + Tailwind + Redux

A template for building React application with typescript and folder structure.

## Styling

Tailwind css is setup here for styling which can be used directly using classnames.

## Routing

React-router-dom is installed as a library for navigation and routing. A router folder is setup where there are two files.

* router.tsx : for managing the routes and setting the nested layouts and pages.
* page.tsx : this works as the import and export for pages imported from the pages folder using lazy loading.

## State Management

React-redux is setup on the apps folder where all the slices are kept on the slices folder.

## API calls

RTK-query is used to make api calls which not only handles api calls but also manages the state of the call associated with it. This can be used by setting the api slices on the apis folder made inside of the app folder.

