# Frontend Mentor - Minimalist Portfolio Website Solution

This is my solution to the [Minimalist portfolio website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE). This challenge was a great opportunity to build a clean and responsive personal portfolio with a focus on accessibility, responsiveness, and dynamic user interactions.

## Table of contents

- [Frontend Mentor - Minimalist Portfolio Website Solution](#frontend-mentor---minimalist-portfolio-website-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and scroll to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address`, or `Message` fields are empty ("This field is required")
  - The `Email Address` is not formatted correctly ("Please use a valid email address")

### Screenshot

![Screenshot of the project](./preview.jpg)

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- Flexbox & Grid Layout
- React
- React Router
- Mobile-first workflow
- Vite + ESLint + Prettier setup

### What I learned

This project helped me refine my knowledge in several key areas:

- **Dynamic Routing**: I used React Router to create dynamic portfolio detail pages based on URL slugs.
- **Tailwind Responsive Design**: I leveraged Tailwind's utility classes to control image rendering and layout on different screen sizes.
- **Form Validation**: I implemented custom form validation for the contact section using React’s local state.

Here’s a small snippet of how I handled dynamic routes:

```jsx
<Route path="/portfolio/:slug" element={<Details />} />
```
