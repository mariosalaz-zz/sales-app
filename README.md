# Sales-App
A simple shopping basket app developed with React.js and Typescript

# How to use
Select products from list, those products are going to be added to shopping basket (basket icon at the top right of the app), when you are done selecting click on the basket and a modal with the summary of products chosen will appear, you can cancel or buy the products, if you cancel, you will return to list view, if you buy the products you will see your receipt with the total amount.

# App design
I based app architecture in three React patterns: 
- Propagation: pass to child components only the props that the component are going to need. For this purpose I used destructuting and `...rest` operator
- Composition: Created components that uses another components. e.g `Amount` component

- Container components: In the code you will see some components in which there are two files: `container` and `presentation component` e.g: `ProductContainer` and `Product`. My purpose with that was to separe logic of presentation, so `container` component will handle logic and the another component will handle presentation. In some cases I didn't used it because logig was very small to separate it into differents components 

### CSS
- The preprocessor used is SCSS
- Used Bootstrap v5

### JS
- React is the framework used to render the page
- App was developed with typescript 
- I used React hooks, only functional components
- ES6 is used as complement to React

## First Run
- Make sure you have node and npm installed
- Run the command `npm install` to get all dependencies
- Run `npm run start` to run the project
- Open your browser at `localhost:3000`

