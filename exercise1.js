// exercise1.js
const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", function (event) {
  // 1. Find the closest trigger from event.target
  const trigger = event.target.closest(".accordion-trigger");
  // If null, the click was not on a trigger - send error and return early.
  if (!trigger) {
    // check to see if the panel was clicked, if so leave error check early
    // needed as the error would be thrown when clicking on the panel
    if (event.target.closest(".accordion-panel")) {
      return;
    } else {
      console.error("No trigger found");
      return;
    }
  }
  // 2. From the trigger, find the closest .accordion-item
  const item = trigger.closest(".accordion-item");
  // check to see if item is found, if not returns error
  if (!item) {
    console.error("No accordion item found");
    return;
  }
  // 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
  const items = accordion.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    // check to make sure item is not the same as the clicked item
    // as it wouldn't close itself when clicked (it was closing itself then toggling back on the same click)
    if (item !== item) {
      item.classList.remove("open");
    }
  });
  // 4. Toggle .open on the clicked item only
  item.classList.toggle("open");
});
