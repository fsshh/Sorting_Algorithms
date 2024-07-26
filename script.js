const input_bar = document.querySelectorAll(".input_bars");
const input_content_container = document.querySelectorAll(".input_content_container");
const input_container = document.getElementById("input_container");

function shuffleData(){
    for (let i = 0; i < input_bar.length; i++) {
    
        let randTo10 = Math.floor(Math.random() * 10) * 20
        
        if(randTo10 == 0) randTo10 += 10;
        
        input_bar[i].style.paddingTop = `${randTo10}px`
        
        const computedStyle = window.getComputedStyle(input_bar[i]);
        let paddingTopValue = parseFloat(computedStyle.paddingTop) * 0.1

        input_bar[i].textContent = paddingTopValue
    }

}

shuffleData()

let speed = 500; // Initial speed in milliseconds
document.getElementById('speedRange').addEventListener('input', function() {
    speed = this.value;
    document.getElementById('speedValue').textContent = this.value;
});

async function swapElements(el1, el2) {
    return new Promise(resolve => {
        const container = el1.parentNode;
        // Highlight the elements being swapped
        el1.classList.add('highlight');
        el2.classList.add('highlight');
        
        // Swap elements visually
        const transform1 = window.getComputedStyle(el1).transform;
        const transform2 = window.getComputedStyle(el2).transform;

        el1.style.transform = transform2;
        el2.style.transform = transform1;

        requestAnimationFrame(() => {
            // Temporarily move el1 to the correct position to make the swap visible
            container.insertBefore(el1, el2.nextSibling);

            // Reset the transforms after the move
            el1.style.transform = '';
            el2.style.transform = '';

            setTimeout(() => {
                // Remove the highlight after the swap
                el1.classList.remove('highlight');
                el2.classList.remove('highlight');

                resolve();
            }, speed);
        });
    });
}

async function bubbleSort() {
    let boxes = Array.from(input_container.children);
    let n = boxes.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            const a = parseInt(boxes[i].textContent);
            const b = parseInt(boxes[i + 1].textContent);
            if (a > b) {
                await swapElements(boxes[i], boxes[i + 1]);
                swapped = true;
                boxes = Array.from(input_container.children); // Update the boxes array after swap
            }
        }
        n--; // Reduce the array length to optimize the sorting
    } while (swapped);
}

const sortTitle = document.getElementById("sort_title")
const sortLabel = document.getElementById("sort");

// Add an event listener to the select element

sortLabel.addEventListener('change', function() {
    sortTitle.textContent = `${sortLabel.value} Sort: `
})

function sortData(){
    switch (sortLabel.value) {
        case "Bubble":
            bubbleSort();
            break;
        case "Selection":
            alert("WIP");
            break;
        case "Insertion":
            alert("WIP");
            break;
        case "Quick":
            alert("WIP");
            break;
        case "Counting":
            alert("WIP");
            break;
        case "Radix":
            alert("WIP");
            break;
        case "Merge":
            alert("WIP");
            break;
    }
}