// ( == up one floor
// ) == down one floor

const fs = require('fs');

function q1() {
    
    // reading the file
    
    fs.readFile('./santa.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    
    const directions = data.toString();
        
    // getting each character
        
    const directionsArray = directions.split('');
    console.log(directionsArray);
        
    // counting how many ( and ) there are
        
    const answer = directionsArray.reduce((acc, currentValue) => {
        if (currentValue === '(') {
            return acc += 1;
        } else if (currentValue === ')') {
            return acc -=1;
        } 
    }, 0);
        console.log(answer);
        
        
});
}

q1();

// when does Santa enter the basement?

function q2() {
    fs.readFile('./santa.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    
    const directions = data.toString();        
    const directionsArray = directions.split('');
    let accumulator = 0;
        let counter = 0;
    const answer = directionsArray.some((currentValue) => {
        if (currentValue === '(') {
            accumulator += 1;
        } else if (currentValue === ')') {
            accumulator -=1;
        } 
        counter ++;
        return accumulator < 0;
    });
        console.log(counter);
    });
}
                
q2();
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                