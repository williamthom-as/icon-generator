const generator = require('./dist/index.js');
const name = 'william link';
const baseSize = 40;
const arr = generator.extractColorPalette(name);
const vals = generator.extractPatternSequencing(name);

let svg = document.getElementById("ico");
svg.setAttributeNS(null, "width", baseSize * 4)
svg.setAttributeNS(null, "height", baseSize * 4)

let rect1 = generator.createBasicRectangle(baseSize * 4, baseSize * 4, null, null, arr[0]);
svg.appendChild(rect1);

let tIdx = 1;
vals.forEach((row, rIdx) => {
    // Rows
    row.forEach((columnVal, cIdx) => {
        // Columns 
        let fill = arr[(columnVal % tIdx) + 1];

        if (fill) {
            let shape = generator.createBasicRectangle(
                baseSize, 
                baseSize, 
                (cIdx * baseSize), 
                (rIdx * baseSize), 
                fill
            );
            svg.appendChild(shape);
        }

        tIdx += 1;
    });
})