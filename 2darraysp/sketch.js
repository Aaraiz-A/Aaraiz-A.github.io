let grid;
let cellSize;
const GRID_SIZE = 10;
const pcols = 7;
const prows = 6;
let startButtonCharacteristics;
let startButtonTextCharacteristics;
let backButtonCharacteristics;
let state = "title screen";
let clickedElement = {}; // Initialize clickedElement with an empty object

// Define transition metals
const transitionMetals = [
    { symbol: "Sc", name: "Scandium", atomicNumber: 21, atomicMass: 44.96 },
    { symbol: "Ti", name: "Titanium", atomicNumber: 22, atomicMass: 47.87 },
    { symbol: "V", name: "Vanadium", atomicNumber: 23, atomicMass: 50.94 },
    { symbol: "Cr", name: "Chromium", atomicNumber: 24, atomicMass: 51.996 },
    { symbol: "Mn", name: "Manganese", atomicNumber: 25, atomicMass: 54.94 },
    { symbol: "Fe", name: "Iron", atomicNumber: 26, atomicMass: 55.85 },
    { symbol: "Co", name: "Cobalt", atomicNumber: 27, atomicMass: 58.93 },
    { symbol: "Ni", name: "Nickel", atomicNumber: 28, atomicMass: 58.69 },
    { symbol: "Cu", name: "Copper", atomicNumber: 29, atomicMass: 63.55 },
    { symbol: "Zn", name: "Zinc", atomicNumber: 30, atomicMass: 65.38 },
    { symbol: "Y", name: "Yttrium", atomicNumber: 39, atomicMass: 88.91 },
    { symbol: "Zr", name: "Zirconium", atomicNumber: 40, atomicMass: 91.22 },
    { symbol: "Nb", name: "Niobium", atomicNumber: 41, atomicMass: 92.91 },
    { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, atomicMass: 95.96 },
    { symbol: "Tc", name: "Technetium", atomicNumber: 43, atomicMass: 98 },
    { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07 },
    { symbol: "Rh", name: "Rhodium", atomicNumber: 45, atomicMass: 102.91 },
    { symbol: "Pd", name: "Palladium", atomicNumber: 46, atomicMass: 106.42 },
    { symbol: "Ag", name: "Silver", atomicNumber: 47, atomicMass: 107.87 },
    { symbol: "Cd", name: "Cadmium", atomicNumber: 48, atomicMass: 112.41 },
    { symbol: "Hf", name: "Hafnium", atomicNumber: 72, atomicMass: 178.49 },
    { symbol: "Ta", name: "Tantalum", atomicNumber: 73, atomicMass: 180.95 },
    { symbol: "W", name: "Tungsten", atomicNumber: 74, atomicMass: 183.84 },
    { symbol: "Re", name: "Rhenium", atomicNumber: 75, atomicMass: 186.21 },
    { symbol: "Os", name: "Osmium", atomicNumber: 76, atomicMass: 190.23 },
    { symbol: "Ir", name: "Iridium", atomicNumber: 77, atomicMass: 192.22 },
    { symbol: "Pt", name: "Platinum", atomicNumber: 78, atomicMass: 195.08 },
    { symbol: "Au", name: "Gold", atomicNumber: 79, atomicMass: 196.97 },
    { symbol: "Hg", name: "Mercury", atomicNumber: 80, atomicMass: 200.59 },
    { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104, atomicMass: 267 },
    { symbol: "Db", name: "Dubnium", atomicNumber: 105, atomicMass: 270 },
    { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, atomicMass: 269 },
    { symbol: "Bh", name: "Bohrium", atomicNumber: 107, atomicMass: 270 },
    { symbol: "Hs", name: "Hassium", atomicNumber: 108, atomicMass: 269 },
    { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, atomicMass: 278 },
    { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, atomicMass: 281 },
    { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, atomicMass: 282 },
    { symbol: "Cn", name: "Copernicium", atomicNumber: 112, atomicMass: 285 },
];

function setup() {
    createCanvas(800, 600); // Adjust the canvas size
    shuffle(transitionMetals, true); // Shuffle the transitionMetals array
    fillTransitionMetalsArray(); // Fill the transition metals array
    grid = generateEmptyGrid(prows, pcols);
    cellSize = min(width, height) / max(prows, pcols);
}

function fillTransitionMetalsArray() {
    // Fill the transition metals array with empty objects to match the grid size
    const totalCells = pcols * prows;
    const missingCells = totalCells - transitionMetals.length;
    if (missingCells > 0) {
        for (let i = 0; i < missingCells; i++) {
            transitionMetals.push({});
        }
    }
}

function draw() {
    if (state === "title screen") {
        // Draw title screen
        background(0, 48, 73);
        titleText();
        startButton();
        displayStartButton();
        startButtonText();
        displayStartButtonText();
    } else if (state === "periodic table") {
        // Draw periodic table
        background(0, 48, 73);
        displayGrid();
    } else if (state === "element details") {
        // Draw element details
        background(255);
        displayElementDetails(clickedElement);
        backButton();
        displayBackButton();
    }
}

function displayGrid() {
    // Draw grid
    strokeWeight(1);
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const xPos = x * cellSize;
            const yPos = y * cellSize;
            fill(y % 2 === 0 ? 'white' : 'lightgray');
            rect(xPos, yPos, cellSize, cellSize);
            const index = y * pcols + x;
            if (index < transitionMetals.length) {
                const element = transitionMetals[index];
                if (element.symbol) { // Check if element is not empty
                    fill(0);
                    textSize(cellSize / 3); // Adjust text size based on cell size
                    textAlign(CENTER, CENTER);
                    text(element.symbol, xPos + cellSize / 2, yPos + cellSize / 2 - cellSize / 6); // Center text within cell
                }
            }
        }
    }
}

function mousePressed() {
    if (state === "title screen") {
        // Check if the start button is clicked
        if (mouseX > startButtonCharacteristics.x - startButtonCharacteristics.width / 2 &&
            mouseX < startButtonCharacteristics.x + startButtonCharacteristics.width / 2 &&
            mouseY > startButtonCharacteristics.y - startButtonCharacteristics.height / 2 &&
            mouseY < startButtonCharacteristics.y + startButtonCharacteristics.height / 2) {
            state = "periodic table";
        }
    } else if (state === "periodic table") {
        // Check which element is clicked
        const column = Math.floor(mouseX / cellSize);
        const row = Math.floor(mouseY / cellSize);
        const index = row * pcols + column;
        if (index >= 0 && index < transitionMetals.length) {
            clickedElement = transitionMetals[index];
            if (Object.keys(clickedElement).length !== 0) {
                state = "element details";
            }
        }
    } else if (state === "element details") {
        // Check if the back button is clicked
        if (mouseX > backButtonCharacteristics.x - backButtonCharacteristics.width / 2 &&
            mouseX < backButtonCharacteristics.x + backButtonCharacteristics.width / 2 &&
            mouseY > backButtonCharacteristics.y - backButtonCharacteristics.height / 2 &&
            mouseY < backButtonCharacteristics.y + backButtonCharacteristics.height / 2) {
            state = "periodic table";
        }
    }
}

function displayElementDetails(element) {
    // Display element details if the element is not empty
    if (Object.keys(element).length !== 0) {
        textAlign(CENTER);
        textSize(24);
        text("Element Name: " + element.name, width / 2, height / 3);
        text("Element Symbol: " + element.symbol, width / 2, height / 2);
        text("Atomic Number: " + element.atomicNumber, width / 2, height / 2 + 50);
        text("Atomic Mass: " + element.atomicMass, width / 2, height / 2 + 100);
    }
}

function startButton() {
    // Define start button characteristics
    startButtonCharacteristics = {
        x: width / 2,
        y: height / 1.6,
        width: 250,
        height: 60,
        color: color(255, 183, 3)
    };
}

function displayStartButton() {
    // Display start button
    fill(startButtonCharacteristics.color);
    rectMode(CENTER);
    rect(startButtonCharacteristics.x, startButtonCharacteristics.y, startButtonCharacteristics.width, startButtonCharacteristics.height, 10);
}

function startButtonText() {
    // Define start button text characteristics
    startButtonTextCharacteristics = {
        x: width / 2,
        y: height / 1.55,
        size: 24,
        color: color(2, 1, 3)
    };
}

function displayStartButtonText() {
    // Display start button text
    fill(startButtonTextCharacteristics.color);
    textAlign(CENTER, CENTER);
    textSize(startButtonTextCharacteristics.size);
    text("Let's Go!", startButtonTextCharacteristics.x, startButtonTextCharacteristics.y);
}

function backButton() {
    // Define back button characteristics
    backButtonCharacteristics = {
        x: width / 2,
        y: height - 50,
        width: 150,
        height: 40,
        color: color(200),
        label: "Back"
    };
}

function titleText() {
    // Display title text
    textAlign(CENTER);
    textFont("Trebuchet MS");
    fill(253, 240, 213);
    textSize(40);
    text("Periodic Table: Transition Metals!", width / 2, height / 2);
}

function displayBackButton() {
    // Display back button
    fill(backButtonCharacteristics.color);
    rectMode(CENTER);
    rect(backButtonCharacteristics.x, backButtonCharacteristics.y, backButtonCharacteristics.width, backButtonCharacteristics.height, 10);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(backButtonCharacteristics.label, backButtonCharacteristics.x, backButtonCharacteristics.y);
}

function fillTransitionMetalsArray() {
    // Fill the transition metals array with empty objects to match the grid size
    const totalCells = pcols * prows;
    const missingCells = totalCells - transitionMetals.length;
    if (missingCells > 0) {
        for (let i = 0; i < missingCells; i++) {
            transitionMetals.push({});
        }
    }
}

function generateEmptyGrid(pcols, prows) {
    // Generate an empty grid
    let emptyArray = [];
    for (let y = 0; y < prows; y++) {
        emptyArray.push([]);
        for (let x = 0; x < pcols; x++) {
            emptyArray[y].push(0);
        }
    }
    return emptyArray;
}