let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    let date = new Date(year, 1,1)
    return Math.round((date - this.startDate)/(1000*60*60*24*365.4))
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let vertical = Math.abs(parseInt(this.beginningLocation.vertical)-parseInt(this.endingLocation.vertical))
    return horizontal +vertical
  }

  estimatedTime(peak){
    if(peak){

      return this.blocksTravelled()/2
    }else{
      return this.blocksTravelled()/3
    }
  }
}
