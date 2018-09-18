// A driver can be initialized with a name, and a string representing the day that he joined Scuber.
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate);
  }


// takes an argument of a year and returns the number of years since the driver's startDate.
  yearsExperienceFromBeginningOf(endDate){
    let date = new Date(endDate, 1,1)
    return Math.round((date - this.startDate)/(1000*60*60*24*365))
  }
}


///////////////////////////////////////////////////////////////////////////////
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
// A route is initialized with two arguments, a beginningLocation and an endingLocation.
//Both of these arguments are JavaScript objects with an attributes of horizontal and vertical.
class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

// returns an integer with the number of blocks travelled. In New York City, to travel East
// and West you cross avenues, and to travel North and South you cross streets. To calculate
// the distance of in streets, you can use subtraction (eg. 13th street to 10th street is
// three blocks). To calculate the distance of avenues travelled, you will need to know the
// names and order of avenues in New York City. You can use the following array to help with
//your calculation:
   blocksTravelled(){
    let horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let vertical = Math.abs(parseInt(this.beginningLocation.vertical)-parseInt(this.endingLocation.vertical))
    return (horizontal + vertical);
  }

// The method returns the number of minutes estimated for the trip. The estimated time depends
// on the distance in blocks and whether the trip is occurring during peak hours or off peak
// hours. During off peak hours, a driver travels three blocks in a minute, while during peak
// hours a driver travels an estimated two blocks in a minute.
   estimatedTime(peak){
    if(peak){
       return (this.blocksTravelled() / 2);
    }
    else{
      return (this.blocksTravelled() / 3);
    }
  }
}
