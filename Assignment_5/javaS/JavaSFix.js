const history = [];

function validateRequest(request) {
    if (!request || !request.name) {
        throw new Error("Invalid request: missing shape name!");
    }

    if (request.name === "circle") {
        if (typeof request.radius !== "number" || request.radius <= 0) {
            throw new Error("Circle requires a positive radius");
        }
    }

    if (request.name === "rect") {
        if (
            typeof request.w !== "number" ||
            typeof request.h !== "number" ||
            request.w <= 0 ||
            request.h <= 0
        ) {
            throw new Error("Rectangle requires positive values!");
        }
    }
}

function calculateArea(request) {
    if (request.name === "circle") {
        return Math.PI * request.radius * request.radius;
    }

    if (request.name === "rect") {
        return request.w * request.h;
    }

    throw new Error("Unknown shape type.");
}

function updateStatusDisplay(message) {
    const display = document.getElementById("status-display");
    if (display) {
        display.innerText = message;
    }
}

function logHistory(shapeName, area) {
    const entry = {
        item: shapeName,
        val: area,
        time: Date.now()
    };

    history.push(entry);
    console.log("Audit Log:", entry);
}

function handleShapeRequest(request) {
    try {
        validateRequest(request);
        const result = calculateArea(request);

        const statusMsg =
            `Processed ${request.name} with area ${result.toFixed(2)}`;

        updateStatusDisplay(statusMsg);
        logHistory(request.name, result);

    } catch (error) {
        updateStatusDisplay(error.message);
        console.error(error);
    }
}

handleShapeRequest({
    name: "circle",
    radius: 5
});

handleShapeRequest({
    name: "rect",
    w: 4,
    h: 6
});

function printHistory() {
    console.table(history);
}