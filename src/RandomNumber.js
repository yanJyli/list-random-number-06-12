import getRandomNumber from './GetRandomNumber.js';

function GetArreyNumber() {

    const numberCount = getRandomNumber(1, 25);

    let arrNumber = [];

    for (let i=1; i < numberCount; i++) {
        arrNumber.push(Math.round(Math.random() *numberCount))
    }
    const count = arrNumber.length;

    arrNumber.sort(function (a, b) {
        return a - b;
    });

    const listNumber = arrNumber.map((number) => {return <li key={number}>{number}</li>;});

    return (<>
        <span id ="count">The amount of numbers is {count}</span>
        <ul id ="ul">{listNumber}</ul>
        </>
    );
}

export default GetArreyNumber;