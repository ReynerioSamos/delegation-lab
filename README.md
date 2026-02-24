# Lab 4 of GUI Programming which covers Event Delegation:
- Understanding why attaching on listener to a parent is preferable to attaching many listeners to children
- Using `event.target` inside delegated handlers to identify which child node triggered the event
- Using `element.closest(selector)` to safely traverse DOM tree
- Using `element.matches(selector)` to guard handler logic with a CSS selector test
- Toggling CSS classes to drive visible state changes without touching inline styles
- Using Git feature branches and meaningful commits

---

There are 6 code files:
- One `index.html` shell to initialize the webpage and hold interactable elements
- One `styles.css` to describe layout and styling of the webpage and its components
- Four `exercise.js` files to hold the code for different tasks which make the webpage interactable
	- `exercise1.js` : Accordion Menu
		- Practice event delegation and `closest()` by driving an accordion entirely from a single listener on parent `<ul>`
	- `exercise2.js` : Live Tag Builder
		- Practice event delegation on a dynamic container -- One where child elements are added and removed at runtime.
		- Uses `matches()` to target the remove button
	- `exercise3.js` : Filterable Card Grid
		- Uses `closest()` and `matches()` in one delegation handler to build a filterable toolbar that shows and hides cards.
	- `exercise4.js` : Inline Edit List
		- Uses delegation to detect double-clicks on list items, swaps text for an editable input and restore the text on blur or escape -- without adding a listener to a list item

---

Some concepts that clicked:
- Using `clostest()` and `matches()` to target desired elements
- Toggling element class attributes vs removing/adding them

Some challenges faced:
- Making sure malicious inputs would not be run in the Live Tag Builder for Exercise 2
  - Solved by making a sanitize function and running all inputs throught that

For future projects:
- Understanding how delegation can make attaching complicated listener functions to both existing and not-yet-created elements (like in the live tag builder)
