# Delivering Thyme

_A Code Challenge for Design System Engineer Candidates_

## Challenge

As a Design System Engineer you’ll be asked to research, sketch, and implement architectural, deployment, and automation solutions for our design system.
This challenge allows you the opportunity to demonstrate your experience and abilities with a variety of potential related tasks.

Thyme is a fictitious new design system in its very early stages.
It contains a solid foundation of styles using Sass and a small set of basic React components.
Since our User Experience Developers specialize in creating components with high-quality markup and styles based on specs provided by our System Design team, we’ve spent little time so far setting up any method for documenting and deploying this library.
Your challenge is to complete any of the following tasks to help take this blossoming system to the next level.

- Implement a documentation system such as Storybook that more effectively demonstrates the components and their features for developers to use as a reference.
- Establish a delivery pipeline that allows this library of components to be published and consumed by applications such as through some form of NPM package or other similar.
- Identify aspects of how this existing system is architected that you think present unnecessary challenges for engineers who will use it in context and revise the system accordingly.

## Guidelines

It is completely acceptable to submit just a written plan and estimated effort in lieu of  actually forking the repository and completing actual code work; we’re just as interested in your knowledge, experience, and thought process as your ability to execute on a plan. If you choose this route consider providing the following:

- Identify the problem/task
- Summarize your solution
- Outline general steps you’d follow to implement the solution
- Estimate the development effort in days, assuming you were working full time on only this project
- Outline any dependencies or unknowns that would impact your direction

If you choose to contribute code as a solution:

- Similar to above, even if you choose to submit a coded solution, please include with it a statement identifying the problem/task you’re solving and the approach you are taking to solve it.
- In order to help with our review of your solution, you may clone the provided base repository.
  However, please commit your work onto a branch and set up a PR in GitHub.
  Use this as a place to also provide additional context around what you’re aiming to achieve, where you left off, and what steps you would take next.
- Please do not spend more than a few hours on the challenge; we are happy to see progress on a solution and not necessarily a finished one.
  If indeed your solution is “work in progress” please be sure out outline what steps you would take next in order to finish the work if you were on the job.

## About Thyme's Current Setup

Thyme contains...

- a few components built with React/Next.js. See `thyme/components`.
- a blossoming style library built with Sass. See `thyme/styles`.
- a simple demostration page displaying the components and a few variations. See `thyme/pages/index.js`.

The rest of the contents of `thyme` are, for the most part, just part of the standard Next.js initial file set.

You can run Thyme locally cloning this repository and running:

```
yarn install
```

Then launch the development environment with

```
yarn start
```

We intentionally placed `thyme` in a subdirectory to give you space to create new configurations outside of this folder as needed.
Feel free work with these files directly in your solution, or to create new directories in the root folder with your solutions.
