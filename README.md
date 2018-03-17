# ToDo List

## Project Description

This project was designed and built over the weekend as a showcase of my standing abilities, plus to serve as my introduction into ReactJS. It was created using the [Create React App](https://github.com/facebookincubator/create-react-app) manager (CRA), so I could focus my attention on learning ReactJS and building the application, and less on build and local development tooling.

### Design Inspiration
- [My UX Wishlist for To-Do list apps](https://uxplanet.org/my-ux-wishlist-for-to-do-list-apps-d43f737817bd)
- [TeuxDeux](https://teuxdeux.com/)

### Learning Sources
- [React.js Essential Training](https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html)
- [React JS Crash Course](https://www.youtube.com/watch?v=A71aqufiNtQ)

## Running the Application
- `cd {project-parent-directory}`
- `git clone http://github.com/seavor/whatever`
- `cd whatever`
- `npm install`
- `npm start`

## Development Considerations
- `Naming convention:` The CRA build tool generated everything in TitleCase. I chose to leave as is, instead of changing in places where convention might otherwise have had me using camelCase.
- `CSS Preprocessor:` While looking into how best to incorporate Sass into CRA's build process, I came across this paragraph in their documentation, which felt like a good enough reason to decide not to. Which was disappointing, as I particularly like using Sass, for the `&` operator if nothing else.
  - Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in <AcceptButton> and <RejectButton> components, we recommend creating a <Button> component with its own .Button styles, that both <AcceptButton> and <RejectButton> can render (but not inherit). Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition.