- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    - In case we get data that can break our application, proptypes can be used to find that data before it goes into production.
- [ ] Describe a life-cycle event in React?
    - The life-cycle events in React are the stages that the application goes through in managing state and rendering components. It follows a specific order and methods can be called at specific points in time or events in the life cycle
- [ ] Explain the details of a Higher Order Component?
    - A Higher Order Component takes components as props and composes them. This way you can add features to components and return a component with those added features.
- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

    1) inline Styles
    - inline styles are good for quick fixes like adding a cursor or background color conditionally
    2) styled components
    - syled components are more indepth and similar to vanilla css. They are also reusable across the application if they are exported
    3) Vanilla CSS 
    - vanilla CSS is good for really basic styling and will probably always be used in some way especially for resets and global styles. It is also good for styling but has issue assigning and using classes if state is updated asynchrounously and involces className.
