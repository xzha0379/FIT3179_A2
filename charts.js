// stacked bar chart
vegaEmbed('#stacked-bar-chart', {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "highest-coal-stacked.csv",
      "format": {
        "type": "csv"
      }
    },
    "transform": [
      {
        "fold": [
          "Coal", "Gas", "Oil", "Nuclear", 
          "Hydro", "Wind", "Solar", "Bioenergy"
        ],
        "as": ["Fuel Type", "Electricity (kWh)"]
      }
    ],
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "Entity",
        "type": "nominal",
        "sort": {field:"Coal", "order":"descending"},
        "title": "Country"
      },
      "x": {
        "field": "Electricity (kWh)",
        "type": "quantitative",
        "title": "Electricity Generation (kWh)"
      },
      "color": {
        "field": "Fuel Type",
        "type": "nominal",
        "title": "Fuel Type",
        "scale": {
          "scheme": "Set2"
        }
      },
      "tooltip": [
        {"field": "Entity", "type": "nominal", "title": "Country"},
        {"field": "Fuel Type", "type": "nominal", "title": "Fuel Type"},
        {"field": "Electricity (kWh)", "type": "quantitative", "title": "Electricity (kWh)"}
      ]
    },
    "config": {
      "axis": {
        "labelFontSize": 12,
        "titleFontSize": 14
      },
      "legend": {
        "labelFontSize": 12,
        "titleFontSize": 14
      }
    }
  });


  // stacked area chart
  vegaEmbed('#stacked-area-chart', {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "aus-fossil-fuel-exports.csv",
      "format": {
        "type": "csv"
      }
    },
    "mark": "area",
    "encoding": {
      "x": {
        "field": "Year",
        "type": "ordinal",
        "title": "Year"
      },
      "y": {
        "field": "PJ",
        "type": "quantitative",
        "title": "Energy Exports (PJ)"
      },
      "color": {
        "field": "Fuel Type",
        "type": "nominal",
        "title": "Fuel Type",
        "scale": {
          "scheme": "set2"
        }
      },
      "tooltip": [
        {"field": "Year", "type": "ordinal", "title": "Year"},
        {"field": "Fuel Type", "type": "nominal", "title": "Fuel Type"},
        {"field": "PJ", "type": "quantitative", "title": "Energy Exports (PJ)"}
      ]
    }
  });
  
// bubble chart 
  vegaEmbed('#bubble-chart', {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "cleaned-co2-emissions.csv",
      "format": {
        "type": "csv"
      }
    },
    "mark": "point",
    "encoding": {
      "x": {
        "field": "Entity",
        "type": "nominal",
        "axis": {"title": "Country"}
      },
      "y": {
        "field": "Annual CO2 emissions (per capita)",
        "type": "quantitative",
        "axis": {"title": "CO₂ Emissions per Capita"}
      },
      "size": {
        "field": "Annual CO2 emissions (per capita)",
        "type": "quantitative",
        "scale": {"range": [100, 1000]},
        "legend": null
      },
      "color": {
        "field": "Entity",
        "type": "nominal",
        "legend": null,
        "scale": {
          "scheme": "Set2"
        }
      },
      "tooltip": [
        {"field": "Entity", "type": "nominal", "title": "Country"},
        {"field": "Annual CO2 emissions (per capita)", "type": "quantitative", "title": "CO₂ Emissions per Capita"}
      ]
    }
  });
  
  