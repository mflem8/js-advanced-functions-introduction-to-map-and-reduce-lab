const negativizeArr = [1, 2, 3, -9];
const nameArr = ['paul', 'gurney', 'vladimir', 'jessica', 'chani'];

// Map Functions 

const mapToNegativize = () => {
    const negativizedArr = negativizeArr.map(x => x *= -1);
    return negativizedArr;
}

const mapToNoChange = () => {
    const originalNames = nameArr.map(x => x);
    return originalNames;
}

const mapToDouble = () => {
    const doubledArr = negativizeArr.map(x => x * 2);
    return doubledArr;
}

const mapToSquare = () => {
    const squaredArr = negativizeArr.map(x => x * x);
    return squaredArr;
}

// Reduce Functions
const sourceArray = [1, 2, 3];

function reduceToTotal() {
    return sourceArray.reduce((accumulator, currentValue) => accumulator + currentValue);

};

reduceToTotal(100);

