function init() {
  console.log('Initialing.. begin gathering trip details.');
}

const postData = async ( url='', data={})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch (error) {
        console.log("error", error);
      };
};

/* Global Variables */
const travelCard = document.getElementById('input-submit');
// const travelResults = document.getElementById('travel-results');

export async function handleSubmit(event) {
  // Set submit data into key variables
  const destination = document.getElementById('input-destination').value;
  const departureDate = document.getElementById('input-date').value;
  const returnDate = document.getElementById('input-return-date').value;
  // Create a new date instance dynamically with javascript
  const currentDate = new Date();
  const newDate = currentDate.getMonth() + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
  console.log(`newDate: ${newDate}`)
  // Calculate the travel duration
  const startDate = new Date(departureDate);
  const endDate = new Date(returnDate);
  const tripDuration = endDate.getTime() - startDate.getTime();
  const daysInTravel = tripDuration / (1000 * 60 * 60 * 24);
  // Console log all values for reference
  console.log(`destination: ${destination}`);
  console.log(`departureDate:  ${departureDate}`);
  console.log(`returnDate:  ${returnDate}`);
  console.log(`daysInTravel: ${daysInTravel}`);
  console.log(`Form Submitted! Time stamp: ${event.timeStamp}`);
}

travelCard.addEventListener('click', handleSubmit);

export {
  //main function from app.js
  init
}
