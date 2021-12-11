// 1.SLICE

function slice(s,e)
{
    const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']; 
    var modifiedFood = []

    for(let i=s;i<e;i++)
    {
        modifiedFood.push(foods[i])
    }

    return modifiedFood;

}



// // 2.SPLICE

function splice(x,y,z1,z2)
{
    const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']; 
    var modifiedFood=foods.slice();
    modifiedFood.splice(x,y,z1,z2)
    return modifiedFood
}




// // 3.FILTER

function isEven(x)
{
    if(x%2==0)
    {
        return x;
    }
}

function isPrime(x)
{
    var flag=0;
    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
            flag=1;
        }
    }

    if(flag==0)
    {
        return true;
    }
}

function filter_even(x)
{
    const numberArray = x; 

    return(numberArray.filter(num =>isEven(num)));
}

function filter_prime(x)
{
     const numberArray = x; 

    return(numberArray.filter(num =>isPrime(num)));
}




// // 4.REJECT

function nonPrime(x)
{
    var flag=0;
    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
            flag=1;
        }
    }

    if(flag==1)
    {
        return x;
    }
}

function reject(x)
{
    const numberArray = x; 
    return(numberArray.filter(num =>nonPrime(num)));
}




// // 5.LAMBDA FUNCTION

let isEven_lambda=x=>{
    if(x%2==0)
    {
        return x;
    }
}

function lambda(x)
{    
    const numberArray = x; 
    return(numberArray.filter(num =>isEven_lambda(num)));
}


// 6.MAP

function findSquareOfNumbers(x)
{
    return (x*x);
}

function map(x)
{
    const myArray = x; 
    return(myArray.map(num =>findSquareOfNumbers(num)));
}





// REDUCE
function multiply(x)
{
    var product=x.reduce((accumulator,currentValue)=>{
        return accumulator * currentValue
    })
    return product
}
function reduce(x)
{
    const myArray= x ;
    return(multiply(myArray))
}

