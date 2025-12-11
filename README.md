### Repo: https://github.com/a-zeb/component-library.git
### Site: https://candid-taiyaki-8d78a8.netlify.app/

# Reflection

## How did you handle optional props in your components?

- I added them conditionally based on whether or not they existed.

## What considerations did you make when designing the component interfaces?

- I thought about the high level design of the site and how each component might be implemented depending on different user interactions. I also considered how data and state would be managed as events are passed.

## How did you ensure type safety across your components?

- I abstracted types into my index.ts and imported it wherever a type was needed to ensure consistency.

## What challenges did you face when implementing component composition?

- I had to manage the passing of data between components which I did through callback functions.

## How to use the components

- From the main page, you can either click on the button in the user card of the product card. Each one shows an alert. To close the alert, use the "X" button.
