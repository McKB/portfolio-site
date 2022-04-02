// mousemoveFunction -- to be used inside event listener 'mousemove'. 
// Gets cursor position and moves divs to those positions. 
// Adds a "follow" div to the cursor, essentially. 

function mousemoveFunction(m){
    let cursor1 = document.getElementById('cursor1');
    let cursor2 = document.getElementById('cursor2');
    let x = m.clientX;
    cursor1.style.left = x + "px";
    cursor1.style.top = 0;
    let y = m.clientY;
    cursor2.style.left = 0;
    cursor2.style.top = y + "px";
};

// function turnOffExtras allows the user to turn off the 
// cursor follow. 'Cause I know it's going to get annoying. 
// If button is pressed, the two cursor-following divs
// are removed, followed by the event listener. The button 
// text is changed to ask for reinstating the divs. If pressed
// again, the divs are re-created in the document, the event
// listener is re-created, and the button text resets. 

const turnOffExtras = () => {
    let buttonText = document.getElementById('button');
    let cursor1 = document.getElementById('cursor1');
    let cursor2 = document.getElementById('cursor2');

    if (buttonText.innerText === 'no extras, please') {
        cursor1.remove();
        cursor2.remove();
        buttonText.innerText = 'bring it back!';
        document.removeEventListener('mousemove', mousemoveFunction);
    } else {
        const cursorDiv1 = document.createElement("div");
        const cursorDiv2 = document.createElement("div");
        const cursorContainerDiv = document.getElementById('cursorContainer');
        cursorDiv1.setAttribute('id', 'cursor1');
        cursorDiv2.setAttribute('id', 'cursor2');
        cursorContainerDiv.appendChild(cursorDiv1);
        cursorContainerDiv.appendChild(cursorDiv2);
        buttonText.innerText = 'no extras, please';
        document.addEventListener('mousemove', mousemoveFunction);
    }
}

// Initial add of the event listener that adds a follow to 
// the cursor. See 'mousemoveFunction' above.

document.addEventListener('mousemove', mousemoveFunction);