/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Here are some helpful links:
String.prototype.split()
String.prototype.substr()
parseInt()
*/
function makeFriendlyDates(arr) {
  var monthNames = [
  "January", "February", "March", "April", 
  "May", "June", "July","August", 
  "September", "October","November", "December"
];
  
  var startDaySuffix;
  var endDaySuffix;
  var range;
  
  var startDate = new Date(arr[0]);
    var startDay = startDate.getDate();
      
      if ( startDay == 1 ) {
        startDaySuffix = 'st';
      }
      else if ( startDay == 2 ) {
        startDaySuffix = 'nd';
      }
      else if ( startDay == 3 ) {
        startDaySuffix = 'rd';
      }
      else if ( startDay >= 4 || startDay <= 20 ) {
        startDaySuffix = 'th';
      }
/*      else if ( startDay >= 21 ) {
        startDay = startDay.toString();
        startDay = startDay[0].split();
        console.log("START: ", startDay[0]);
      }
 */     
      var startMonthIndex = startDate.getMonth();
      var startYear = startDate.getFullYear();

  var endDate = new Date(arr[1]);
    var endDay = endDate.getDate();
      if ( endDay == 1 ) {
        endDaySuffix = 'st';
      }
      else if ( endDay == 2 ) {
        endDaySuffix = 'nd';
      }
      else if ( endDay == 3 ) {
        endDaySuffix = 'rd';
      }
      else if ( endDay >= 4 || endDay <= 20) {
        endDaySuffix = 'th';
      }
      var endMonthIndex = endDate.getMonth();
      var endYear = endDate.getFullYear();
  
// difference in days between the dates
  var diff = Math.abs(endDate - startDate);
    diff /= 24 * 60 * 60 * 1000;
    //console.log(diff);

// if diff < one year
  if (diff < 364) {
    if (startYear == endYear && monthNames[startMonthIndex] == monthNames[endMonthIndex] ) {
    range = ( [monthNames[startMonthIndex] + " " + startDay + startDaySuffix, endDay + endDaySuffix] );
    }

    if (startYear == endYear && monthNames[startMonthIndex] != monthNames[endMonthIndex] ) {
    range = ( [monthNames[startMonthIndex] + " " + startDay + startDaySuffix + ", " + startYear, monthNames[endMonthIndex] + " " + endDay + endDaySuffix] );
    }
    
    if (endDate - startDate === 0 ) {
      range = ( [monthNames[startMonthIndex] + " " + startDay + startDaySuffix + ", " +  startYear] );
    }
 
    if (startYear != endYear) {
    range = ( [monthNames[startMonthIndex] + " " + startDay + startDaySuffix, monthNames[endMonthIndex] + " " + endDay + endDaySuffix] );
    }
  }
  
// if diff > one year
  if (diff > 364) {
    range = ( [monthNames[startMonthIndex] + " " + startDay + startDaySuffix + ", " + startYear, monthNames[endMonthIndex] + " " + endDay + endDaySuffix + ", " + endYear] );
  }
  
  if( diff === 364 ) {
    range = ( [monthNames[startMonthIndex] + " " + startDay + startDaySuffix + ", " + startYear, monthNames[endMonthIndex] + " " + endDay + endDaySuffix ]);
  }

  
  return range;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

/*
makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].

makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].

makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].

makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]

makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].

makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].

makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/

