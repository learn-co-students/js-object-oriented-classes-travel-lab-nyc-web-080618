class Driver {
  constructor(name, startDate) {
  this.name = name
  this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
     const endDate = new Date(year,1,1)
     const years = (endDate - this.startDate) / (365*24*60*60*1000)
     return Math.floor(years)
   }
}//end of Driver class

 let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

 class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

   avenuesTravelled(avenue){
    return eastWest.indexOf(avenue)
  }

   blocksTravelled() {
    const horizontal = this.avenuesTravelled(this.endingLocation.horizontal) - this.avenuesTravelled(this.beginningLocation.horizontal);
    const vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontal) + Math.abs(vertical))
  }

   estimatedTime(peak) {
     //debugger
    if(peak){
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }

}//end of routes class
