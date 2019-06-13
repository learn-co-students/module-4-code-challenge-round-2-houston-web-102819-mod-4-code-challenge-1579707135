# React Immersive Code Challenge Final

## Instructions

For this project, you’ll be building out a React application that displays a list of your recent bank transactions.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

To get the data you will be working with, you must fetch from from [this provided API endpoint](https://boiling-brook-94902.herokuapp.com/transactions).

```
https://boiling-brook-94902.herokuapp.com/transactions
```


## Deliverables

**Please implement the following user stories:**
- As a user, you should be able to see a table of transactions.
- As a user, you should be able select a radio button that toggles the active category.
- You should only see transactions that match the active category or *all transactions* if "All" is selected
- As a user, you should also be able to filter by description using the search bar.
- In the end, you should only see transactions that match the active category AND the has a description that includes the text the user typed into the search bar.


![example project](public/demo.gif)

Use the above gif as an example of how the app should function.

We’ve provided some starter code you can use to guide you, but feel free to create or remove components as you see fit.

## Setup
After cloning down the project
- run `npm install`
- You can boot up the server with `npm start`. It will run on `localhost:3000`.
- The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

## Suggested Workflow

You can approach this any way you would like but below is a reasonable approach to this challenge. If you are not sure where or how to begin, follow the steps here.

1) Get the list of Transactions to display on the page as JSON data from the API at this url: [https://boiling-brook-94902.herokuapp.com/transactions](https://boiling-brook-94902.herokuapp.com/transactions).
2) Render all transactions onto the table.
3) Now that you are showing all transactions, focus on making the radio buttons work. Radio is a type of form input `<input type="radio">`. If you're not familiar with them, look it up.
4) Ensure that the user selecting a radio button renders only the transactions in the selected category (or render all transactions if the selected category is `'All'`).
5) Build out the search bar. As the user types, only show transactions that have a description that includes the search term specified by the user. Make sure your radio button feature still works!

## Criteria

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app reasonably separate responsibilities into components and have a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does clicking radio buttons change the state of the active category and calls this.setState?
- **Lifecycle Methods & API:** Does the app make an Fetch request to the API and return data? Does it set the state of the component within the app with that data within a lifecycle method?
- **Feature:** Does the app filter the list of transactions?
- Does the app follow best practices regarding state and component composition?


Good luck!
