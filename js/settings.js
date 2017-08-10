define([], function() {
  /**
   * common settings used throughout the project
   * 
   * Use settings by including the settings module as a dependency,
   * then settings.property will give you direct access to this object. 
   */
  var settings = {
	columnLabels : {
	  "weather_ct_pct" : "Severe Weather",
	  "security_ct_pct" : "Security",
	  "late_aircraft_ct_pct" : "Late aircraft",
	  "nas_ct_pct" : "National Aviation System (NAS)",
	  "carrier_ct_pct" : "Carrier",
	  "arr_del15" : "Delayed by more than 15'",
	},
  };
  return settings;
});