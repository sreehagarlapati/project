# Zomato Clone

A responsive food delivery and restaurant discovery website inspired by Zomato. The project uses HTML, CSS, and JavaScript without any external framework, making it easy to open directly in a browser and explain during a project review.

## Project Files

- `zomato_clone.html` - Main webpage structure, sections, forms, and modals.
- `zomato_clone.css` - Complete styling for layout, cards, responsive design, dark mode, modals, and animations.
- `zomato_clone.js` - Restaurant data, search, filters, sorting, cart, checkout, login/signup demo, and order tracking logic.

## Features

- Zomato-style landing page with hero search section.
- Dynamic restaurant cards generated from JavaScript data.
- 20 restaurant entries with different cuisines, prices, ratings, delivery times, offers, and food tags.
- Live search by restaurant name, cuisine, or food item.
- Search dropdown with quick add-to-cart buttons.
- Category filters for all restaurants, high rating, pure veg, offers, and fast delivery.
- Sorting by recommended, highest rating, fastest delivery, and lowest cost.
- Add-to-cart, quantity increase/decrease, subtotal, delivery fee, taxes, and total bill.
- Checkout modal with address selection, payment selection, order summary, and animated tracking.
- Login and signup demo modals with simple validation.
- Dark mode toggle.
- Toast notifications for actions like adding food, login, signup, and placing orders.
- Fully responsive design for mobile, tablet, and desktop screens.

## How To Run

Open `zomato_clone.html` in any modern web browser.

No server, installation, or package manager is required because this is a pure frontend project.

## JavaScript Concepts Used

- Arrays and objects for restaurant data.
- Functions for rendering, searching, filtering, sorting, and cart calculations.
- DOM manipulation using `getElementById`, `querySelectorAll`, `innerHTML`, and event listeners.
- Conditional rendering for empty states, cart controls, and modal content.
- Timers using `setInterval` and `setTimeout` for placeholder rotation and order tracking.
- Form handling with `event.preventDefault()`.

## CSS Concepts Used

- CSS variables for consistent colors and theme support.
- Flexbox and CSS Grid for layout.
- Media queries for responsive design.
- Hover effects, transitions, shadows, and modal animations.
- Dark mode styling using a `body.dark` class.

## Future Improvements

- Save cart data using `localStorage`.
- Add restaurant detail pages.
- Add real payment gateway integration.
- Add backend database support for real users and orders.
- Add reviews and favorite restaurant functionality.
