// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
      return distance - 42;
    } else {
      return 42 - distance;
    }
  }

  function distanceFromHqInFeet(distance) {
    const blockinFeet= 264;
    {
        if (distance > 42) {
            return (distance - 42)*blockinFeet
          } else {
            return (42 - distance)*blockinFeet
          }
        }
    }

    function distanceTravelledInFeet(start, destination) {
        const blockInFeet = 264; // One block is equal to 264 feet
        const distance = Math.abs(destination - start) * blockInFeet;
        if (destination < start) {
          return distance;
        } else {
          return distance;
        }
      }

      function calculatesFarePrice(start, destination) {
        const distance = Math.abs(destination - start) * 264; // One block is equal to 264 feet
        let farePrice;
      
        if (distance <= 400) {
          farePrice = 0; // Free sample
        } else if (distance > 400 && distance <= 2000) {
          farePrice = (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
        } else if (distance > 2000 && distance <= 2500) {
          farePrice = 25; // Flat rate of 25 dollars for distance over 2000 feet
        } else if (distance > 2500) {
          farePrice = 'cannot travel that far'; // No rides over 2500 feet
        }
      
        return farePrice;
      }