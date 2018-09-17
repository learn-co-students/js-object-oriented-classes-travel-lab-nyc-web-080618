class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    const endDate = new Date(year,1,1)
    const years = (endDate - this.startDate) / (365*24*60*60*1000)
    return Math.floor(years)
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avesTravelled(ave){
    return eastWest.indexOf(ave)
  }

  blocksTravelled(){
    const h = this.avesTravelled(this.endingLocation.horizontal) - this.avesTravelled(this.beginningLocation.horizontal);
    const v = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(h) + Math.abs(v))
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }

}
