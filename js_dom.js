// run this script a terminal is not working due to our node js is a server side js.
// but it works at github webpage.

const bookmarks = [];

// const childElement, appendChildElement, parentElement;
// SyntaxError: Missing initializer in const declaration
// Using let or var which do not reqiur initialization

// let childElement;
// let appendChildElement;
// let parentElement;

// Create a new bookmark (object)
bookmarks.push({url: 'https://facebook.com'});
bookmarks.push({url: 'https://instagram.com'});
bookmarks.push({url: 'https://twitter.com'});

//Outputs
// console.log(bookmarks);

// Bind to id bookmarks for a div

    // Option 1:
    // We can use the method getElementByClassName('.class-name'), but this is mostly used when we want to target multiple/similar elements at once.

    // Option 2:
    // The other option is use querySelector() or querySelectorAll(). But this is mostly relevant when we are dealing with elements that don’t have an ID or class name.

    // Option 3:
    // The final option and most commonly one is to use getElementById('id-name') because our element has an ID of bookmarks. So for this example, we’ll be using this one.

const parentElement = document.getElementById('bookmarks');
// parentElement = document.querySelector("#bookmarks");

// Add child element
    // In each iteration, we do.

    // Create child element
    // Append child element to parent element
    // Show bookmark URL in child element

for (let element of bookmarks) {
    const childElement = document.createElement('div');
    const appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = element.url;
}

// This loop creates the following 
// <div id="bookmarks">

// <div>https://facebook.com</div>
// <div>https://instagram.com</div>
// <div>https://twitter.com</div>

// </div>

// const p1 = document.createElementByID('alink');
// for (let ele of bookmarks) {
//     const aEle = document.createElement('a');
//     aEle.href = ele.url;
//     const brk = document.createElement('br'); 
//     p1.appendChild(aEle);
//     // appendChildElement.innerHTML = element.url;
// }

const p1 = document.getElementById('alink');
for (let ele of bookmarks) {
    const alink = document.createElement('a');
    alink.href = ele.url;
    alink.innerHTML = ele.url;
    p1.appendChild(alink);
    const brk = document.createElement('br');
    alink.appendChild(brk);    
}