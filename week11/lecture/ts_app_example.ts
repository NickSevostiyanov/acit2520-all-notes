// |-------------------------------|
// |Create a simple weather display|
// |-------------------------------|



function printWeather (weatherObj: {city: string, condition: string}) {
    console.log(`
        The weather in  =   ${weatherObj.city} 
        is              =   ${weatherObj.condition}
        `);

}

printWeather({city: "Vancouver", condition: "rainy"});
printWeather({city: "Richmond", condition: "sunny"});



// function printWeather (weatherObj: {city: string, condition: string}) {
//                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // SAME AS:
        // weatherObj: Object
        // weatherObj: {}       <-- Must specify object details
                                // {Variable:Typeof, Variable:typeof}

// function printWeather (weatherObj: Weather) {
//                                    ^^^^^^^
                    // We can CREATE our own Datatype (Typeof)

type Weather = {
    city: string;
    condition: string;
}

// interface Weather = {                    <-- Interface SAME THING as Type
//     city: string;
//     condition: string;   
// }