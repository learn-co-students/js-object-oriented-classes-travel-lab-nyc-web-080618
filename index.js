class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(endYear){
    return endYear - this.startDate.getFullYear() - 1;
  }
}


let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(isPeak){
    if (isPeak){
      return (this.blocksTravelled() / 2);
    }
    else {
      return (this.blocksTravelled() / 3);
    }
  }
}
