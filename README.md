# ToDo List

## Project Description

This project was started with the intention of being designed and built over the weekend as a showcase of my standing abilities, plus to serve as my introduction into ReactJS & ES6. It was created using the [Create React App](https://github.com/facebookincubator/create-react-app) manager (CRA), so I could focus my attention on learning ReactJS and building the application, and less on build and local development tooling. Post-development notes can be found further below in [Summary](#summary).

### Design Inspiration
- [My UX Wishlist for To-Do list apps](https://uxplanet.org/my-ux-wishlist-for-to-do-list-apps-d43f737817bd)
- [TeuxDeux](https://teuxdeux.com/)

### Learning Sources
- [React.js Essential Training](https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html)
- [React JS Crash Course](https://www.youtube.com/watch?v=A71aqufiNtQ)
- [React components and class properties](https://michalzalecki.com/react-components-and-class-properties/)
- [Writing clean code with memoized event handlers](https://michalzalecki.com/react-memoized-event-handlers/)
- [Don't Use Bind When Passing Props](https://daveceddia.com/avoid-bind-when-passing-props/)
- [Pete Hunt: React: Rethinking best practices -- JSConf EU 2013](https://www.youtube.com/watch?v=x7cQ3mrcKaY&feature=youtu.be)

## Live Deployment
- You can access a live deployment of this application at [72hrs](http://72hrs.jletto.com)

## Running the Application
- `cd {project-parent-directory}`
- `git clone http://github.com/seavor/todo-react`
- `cd todo-react`
- `npm install`
- `npm start`
- `http://localhost:3000`

## Development Considerations
- `Naming convention`: The CRA build tool generated everything in TitleCase. I chose to leave as is, instead of changing in places where convention might otherwise have had me using camelCase.
- `CSS Preprocessor`: While looking into how best to incorporate Sass into CRA's build process, I came across this paragraph in their documentation, which felt like a good enough reason to decide not to. Which was disappointing, as I particularly like using Sass, for the `&` operator if nothing else.
  - Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in <AcceptButton> and <RejectButton> components, we recommend creating a <Button> component with its own .Button styles, that both <AcceptButton> and <RejectButton> can render (but not inherit). Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition.
- `@NOTE`: There are notes sprinkled throughout the codebase, where I ran into some kind of issue or quirk that I had to work out. I've left these in as further insights into my learning and thought process while using React & ES6.
	- `/src/App/List/ListItem/ListItem.js`
	- `/src/App/Modal/NewItemModal/NewItemModal.js`

## Summary
- This was my first time working with React beyond Hello World. And I can say, without a doubt, that I LOVE it. Coming from an AngularJS background, it felt like such a breeze wiring up components and interactive child components. I can't wait to use it in a proper project.\
- In the rush of building this (app name coincidence aside, I really only had a bit less than 72hrs to work on this over the weekend), my focus was definitely on utilizing React and ES6 as much as I could (both technologies I havent used before), and in the process of wiring components, trying to research and learn best practices for structuring your components, setting your bindings and properly passing data between parents and children. As a result, there are some definite issues with some of the app logic, as well as separation of concerns when it comes to data handling logic. Working out the app/data logic and and CSS structure took backseat to the actual work of building up the React side of things, though I did spend a little time working out the CSS for some components, just to showcase my skills and a couple techniques I know.
- I kept a record of the design process I went through, and have included them in the repo under `/designs`. Very barebones stuff, but it illustrates a bit of my thought process as I worked through building the app.
- This app started as your standard ToDo practice app, but I noticed halfway through designing/building it, that it was modeling very closely the way I use my given ToDo app on a day to day basis as a scrum tool. What am I doing yesterday, what's up today, what might be ahead of me tomorrow. 72hrs. This seems to be the most important time frame from my experience working in an agile environment, and so midway I switched to embrace the idea of this as a scrum/task manager tool. I think I intend to fill out its features and make it a robust tool that I can use in my day to day work.
- A couple things that, given time, I would definitely refactor:
	- `Modal`: I dont like that the Modal creates an instance of itself for every use. This leaves a lot of clutter in the DOM sitting off screen, which isnt really a problem per se, but I'd prefer to restructure it so it's a single, feedable component that can be used by components throughout the app.
	- `List Handling`: I didnt intend to build a full featured application, so the logic in a bad state of half abstracted, half spaghettified. I would like to pull all list handling and instantiating code into a separate service, and treat it as a separate data layer between the list data/logic and the components.
	- `ListItem Toggles`: I learned towards the end about proper patterns for radio/checkbox handling, so my original ListItem toggles are individual buttons, inside of a radio set that I can React-ivly deselect (which was the original reason they were neither checkboxes or radios, i need one, the other, or neither). Plus it felt a little weird combining the two dats points (persist and complete) into one input group, but that would be easily handled in the submit handler.
- Aside from the ones I started and couldnt complete in time, here are some features I would have liked to include, (and might still if i end up continuing this project, which I very well might):
	- Analog Clock
	- Dark/Light Theme option
	- Settings Modal
	- Login+Cloudsync w/ Firebase
	- Reorder Items
	- Drag'n'Drop Items
	- "Whenever" List
	- History Pagination
	- Mobile Carousel + Touch Swipe Support