// exercise2.js
const tagInput = document.querySelector("#tag-input");
const tagContainer = document.querySelector("#tag-container");
// Sanitize function to avoid XSS attacks with value's innerHTML
// This is done by replacing key characters with their escaped versions
// That wont execute malicious code
// A better way would just be to run the input into .textContent but that defeats the purpose of using innerHTML in this lab
// Also a sanitation library like DOMPurify can be used for more robust sanitization
// I borrowed this one from here: https://jasonwatmore.com/vanilla-js-html-encode-in-javascript
// and added some more characters that I asked AI I should escape
function sanitize(value) {
  return value
    .replace(/&/g, "&amp;") // &
    .replace(/</g, "&lt;") // <
    .replace(/>/g, "&gt;") // >
    .replace(/"/g, "&quot;") // "
    .replace(/'/g, "&#39;") // '
    .replace(/`/g, "&#96;") // `
    .replace(/\//g, "&#47;") // /
    .replace(/\\/g, "&#92;"); // \
}
// -- Add a tag when Enter is pressed --
tagInput.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return;
  const value = tagInput.value.trim();
  // check if value is empty
  if (!value) return;
  // 1. Create a div with class "tag"
  const tag = document.createElement("div");
  tag.classList.add("tag");
  // 2. Set its innerHTML to include the label text
  // and a <span class="tag-remove">&times;</span>
  // Prone to XSS attacks (tested with input: "<a href='javascript:alert(1)'>click me</a>" before sanitization)
  // A way I looked up to avoid this while still using innerHTML was by sanitizing the input
  // So I borrowed one from online I saw that just escapes key characters
  tag.innerHTML = `${sanitize(value)} <span class="tag-remove">&times;</span>`;
  // 3. Append the tag to tagContainer
  tagContainer.appendChild(tag);
  // 4. Clear the input
  tagInput.value = "";
});
// -- Remove a tag via delegation --
tagContainer.addEventListener("click", function (event) {
  // 1. Check event.target.matches('.tag-remove')
  if (event.target.matches(".tag-remove")) {
    // 2. If true, call closest('.tag').remove() on event.target
    event.target.closest(".tag").remove();
  }
});
