# Delivering Thyme

_A Code Challenge for Design System Engineer Candidates_

## Challenge

_As a Design System Engineer you’ll be asked to research, sketch, and implement architectural, deployment, and automation solutions for our design system.
This challenge allows you to demonstrate your experience and abilities with a variety of potential tasks._

Thyme is a fictitious design system in its very early stages.
Our System Creation team has laid a solid foundation of styles using Sass and a small set of basic React components built in Next.js just to get the ball rolling.
Since our System Creation team members specialize in creating components with high-quality markup and styles based on specs provided by our Design team, they've spent little time so far setting up any method for documenting and deploying this library.
Your challenge is to complete any of the following tasks to help take this blossoming system to the next level.

- Implement a documentation system such as Storybook that more effectively demonstrates the components and their features for developers to use as a reference.
Consider as well how this documentation solution might include continuous integration and automated deployment to a public url for engineers to access.
- Establish a delivery pipeline that allows this library of components to be published and consumed by applications such as through some form of NPM package or other similar.
- Identify aspects of how this existing system is architected that you think present unnecessary challenges for engineers who will use it in context and revise the system accordingly.

Note that for each of these options there is no "wrong" or "right" solution that we're looking for... we're hoping to see _your_ particular experiences and interests shine in your solution.

## Guidelines

It is completely acceptable to submit just a written solution plan in lieu of completing actual code work; we’re just as interested in your knowledge, experience, and thought process as your ability to execute on a plan. If you choose this route consider providing the following:

- Identify the problem/task
- Summarize your solution
- Outline general steps you’d follow to implement the solution
- Estimate the development effort in days, assuming you were working full time on only this project
- Outline any dependencies or unknowns that would impact your direction

With only a written solution please email it to your recruiting contact when complete.

If instead you choose to contribute code as a solution:

- In order to help with our review of your solution, you may clone the provided base repository.
  Then commit your work onto a branch and set up a PR in GitHub with your changes set to merge into your `main` branch.
  Please include with it a statement identifying the problem/task you’re solving and the approach you are taking to solve it.
- Please do not spend more than a few hours on the challenge; we are happy to see progress on a solution and not necessarily a finished one.
  If indeed your solution is “work in progress” please be sure out outline what steps you would take next in order to finish the task.
  
With a coded solution please submit your work by adding `@philschanely` (https://github.com/philschanely) as an authorized "admin"-level member of your solution's repository. Then on your solution PR add `@philschanely` as a reviewer when it is ready for review. We'll take it from there to ensure folks at Kajabi can review your work.

## About Thyme's Current Setup

Thyme contains...

- a few components built with React/Next.js. See `thyme/components`.
- a blossoming style library built with Sass. See `thyme/styles`.
- a simple demonstration page displaying the components and a few variations. See `thyme/pages/index.js`.

The rest of the contents of `thyme` are, for the most part, just part of the standard Next.js initial file set.

You can run Thyme locally by cloning this repository and running:

```
yarn install
```

Then launch the development environment with

```
yarn start
```

We intentionally placed `thyme` in a subdirectory to give you space to create new configurations outside of this folder as needed.
Feel free work with these files directly in your solution, or to create new directories in the root folder with your solutions.
