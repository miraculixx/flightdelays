# Summary

Flight delays are a cause of dissatisfaction for most if not all airline passengers. This story looks
at the cause of flight delays using data provided by the US Bureau of Transportation Statistics,
https://www.bts.gov/ throughout the years 2003 - 2017. The story shows that just 3 carriers have caused 
1/3 of all delays, and that most delays are caused by the airlines and the national aviation system (NAS),
not the often suspected extreme weather conditions or security checks at airports.

# Design

My design choices were as follows:

1. Use a line plot to show change of the causes (in percent) over time. I tried a few other 
   options like box plots and bar charts, however they were hard to read and did really convey
   the message (in particular, that some causes have increased or declined where others are
   stable or even negligible).
   
2. Use a bar chart to show cause of delays by carrier, overall. I tried a pie chart but found
   it hard to interpret. The bar chart is clean and conveys the information very well.  
   
3. Use a map to show where (in which regions) the most delays occur. I found a map to be a naturual
   way to depict this information, since the data is aggregated by geographical region. The downside
   is that the map does not allow a quick realization of actual figures, so I added a few interesting
   data points in the explanatory text next to the plot.

# Feedback

see https://github.com/miraculixx/flightdelays/issues

# Resources

* Data source: Monthly US Flight Cause Delays Bureau of Transportation Statistics, Flight cause delays, 2003 - 2017,
  https://www.transtats.bts.gov/OT_Delay/ot_delaycause1.asp?type=3&pn=1
* Include Github comments on the page, https://stackoverflow.com/a/26608674
* Hosting web pages on github, https://help.github.com/articles/user-organization-and-project-pages/

## Data files

* File with base data: 

	* https://github.com/miraculixx/flightdelays/blob/master/raw/fligth_delay_cause_monthly_2003_2017.csv
	* as downloaded from https://www.transtats.bts.gov/OT_Delay/ot_delaycause1.asp?type=3&pn=1
	
* Files used in visualization

	* Cause of delays: https://github.com/miraculixx/flightdelays/blob/master/data/delays_cause_year.csv
	* Cause by carrier: https://github.com/miraculixx/flightdelays/blob/master/data/causeby_carrier.csv
	* Cause by airport: https://github.com/miraculixx/flightdelays/blob/master/data/airport_causes.csv 

	
## Implementation

The app is implemented in a modularized approach using requirejs AMD modules. Backbone.js is used to implement
the plots (as Views). In this model, the index.html provides the page layout, app.js implements application
logic by instantiating views as specified (declarative), and the views modules implement and encapsulate all
the d3 and d3plus logic. This separation of concerns has many advantages, in particular the app is easier to
extend and change. In addition, most of the code is independent of the specific data and could be easily 
adopted to a different data set and a different data story.