window.onload = function() {
    // Get references to the image and canvas elements
    const image = document.getElementById('myImage');
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    // Function to check if a pixel is black
    function isBlackPixel(x, y, imageData) {
        const index = (y * imageData.width + x) * 4;
        const red = imageData.data[index];
        const green = imageData.data[index + 1];
        const blue = imageData.data[index + 2];
        const alpha = imageData.data[index + 3];

        return red === 0 && green === 0 && blue === 0 && alpha === 255;
    }

    function drawPoint(x, y, color) {
        context.fillStyle = color;
        context.fillRect(x, y, 1, 1); // Draw a 1x1 pixel
    }

    // Draw the image onto the canvas when it loads
    image.onload = function() {
        // Set canvas size to match the image
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        // Draw the image onto the canvas
        context.drawImage(image, 0, 0);

        // Get the image data from the canvas
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        // Define the points to check
        const pointsToCheck = [[480,259],[452,21],[389,207],[319,261],[470,65],[259,73],[522,279],[406,91],[296,32],[358,206],[106,247],[507,254],[427,265],[259,47],[104,209],[478,219],[388,81],[543,166],[58,193],[164,247],[125,269],[42,166],[516,207],[367,73],[303,220],[377,70],[348,107],[390,254],[519,135],[128,39],[515,119],[277,25],[376,242],[123,147],[110,131],[428,132],[220,89],[20,170],[479,258],[240,27],[75,86],[303,225],[246,192],[505,196],[26,221],[133,174],[275,154],[458,76],[423,20],[475,148],[528,29],[383,57],[256,90],[196,251],[150,279],[475,97],[173,43],[364,80],[15,224],[291,282],[473,40],[505,140],[292,126],[359,12],[330,104],[475,62],[588,160],[244,142],[155,267],[153,183],[210,145],[344,262],[410,110],[212,109],[153,72],[24,219],[300,223],[174,167],[57,287],[15,127],[554,240],[262,280],[498,197],[67,118],[287,236],[69,244],[417,114],[423,196],[82,48],[153,269],[223,25],[203,42],[319,169],[439,126],[56,87],[85,243],[29,52],[406,282],[67,63],[544,111],[218,251],[341,223],[178,41],[440,287],[170,66],[236,14],[32,199],[173,105],[286,43],[158,34],[171,217],[376,28],[189,184],[146,254],[11,105],[60,101],[86,208],[549,20],[143,53],[336,222],[377,279],[427,144],[391,165],[477,16],[76,29],[175,132],[393,40],[104,161],[51,178],[231,120],[322,37],[163,90],[114,156],[503,96],[194,235],[342,191],[391,43],[467,30],[136,77],[562,215],[289,145],[100,250],[302,196],[75,167],[508,201],[243,217],[269,54],[181,232],[340,35],[197,21],[14,165],[232,86],[113,138],[575,228],[114,120],[549,32],[293,289],[456,161],[230,165],[426,218],[275,196],[397,276],[316,257],[42,127],[529,177],[366,134],[506,106],[241,253],[408,35],[200,249],[390,125],[524,85],[283,33],[242,255],[124,135],[505,68],[539,40],[119,72],[25,247],[530,134],[493,254],[580,147],[90,220],[562,144],[541,271],[39,253],[414,224],[234,104],[445,263]];

        const blackPixels = [];
        // x width
        // y hight

        // Check each point and log the result
        pointsToCheck.forEach(point => {
            const [x, y] = point;

            if (isBlackPixel(x, y, imageData)) {
                console.log(`The pixel at (${x}, ${y}) is black.`);
                drawPoint(x, y, 'green'); // Draw a green circle if the pixel is black
                blackPixels.push({ x, y });
            } else {
                drawPoint(x, y, 'red'); // Draw a green circle if the pixel is black
                console.log(`The pixel at (${x}, ${y}) is not black.`);
            }
        });
        document.getElementById("numPixels").innerHTML = blackPixels.length;

        console.log(blackPixels)
    };

    // Ensure the image is fully loaded by setting its source
    image.src = image.src;
};
