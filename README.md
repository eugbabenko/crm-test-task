# Simple CMS Client-Side App using React, React Router, and Webpack

Create a simple client-side app that functions as a primitive CMS (content management system) using React, React Router, and Webpack. The app downloads a JSON file from a well-known path when it starts. This JSON file contains descriptions of tabs that need to be rendered in the app.

## Tab Description

Each tab's description in the JSON file includes the following properties:

- **id**: A unique identifier for the tab.
- **title**: The title of the tab.
- **order**: The sequential order of the tab among other tabs.
- **path**: The path to a JavaScript file that contains a React component to be rendered in the tab's content.

## General Requirements

- When switching between tabs, the current tab's `id` is added to the URL of the app. For example, 'localhost/dummyTable' or 'localhost/dummyChart'.
- The first tab opens by default.
- If the URL already contains a tab `id` when the app loads, that tab opens by default.
- Lazy loading is implemented for the tab content (identified by the "path" property). The content for a tab is loaded only when it is needed, following a lazy loading approach. You can confirm this behavior in the Network section of the browser's developer tools.

This app allows you to manage and display content in different tabs, with a focus on efficient and dynamic loading of tab content as required.

