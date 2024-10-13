// stacked bar chart
vegaEmbed('#stacked-bar-chart', {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Electricity Generation by Fuel Type per Capita",
    },
    "width": 400,
    "height": 200,
    "font": "Open Sans",
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
      font: "Open Sans",
      "axis": {
        "font": "Open Sans",
        "labelFontSize": 12,
        "titleFontSize": 14
      },
      "legend": {
        "font": "Open Sans",
        "labelFontSize": 12,
        "titleFontSize": 14
      },
      "title": {
        "font": "Open Sans",
        "fontSize": 16,
      }
    }
  });


  // stacked area chart
  vegaEmbed('#stacked-area-chart', {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Exports in PJ by Fuel Type"
    },
    "width": 400,
    "height": 200,
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
        "title": "Energy Exports (PJ)",
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
        {"field": "Year", "type": "ordinal", "title": "Year"},
        {"field": "Fuel Type", "type": "nominal", "title": "Fuel Type"},
        {"field": "PJ", "type": "quantitative", "title": "Energy Exports (PJ)"}
      ]
    },
    "config": {
      font: "Open Sans",
      "axis": {
        "font": "Open Sans",
        "labelFontSize": 12,
        "titleFontSize": 14
      },
      "legend": {
        "font": "Open Sans",
        "labelFontSize": 12,
        "titleFontSize": 14
      },
      "title": {
        "font": "Open Sans",
        "fontSize": 16,
      }
    }
  });
  

// bubble chart 
vegaEmbed('#bubble-chart', {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "CO₂ Emissions per Capita by Country"
  },
  "width": 500,
  "height": 250,
  "data": {
    "url": "cleaned-15-co2-emissions.csv",
    "format": {
      "type": "csv"
    }
  },
  "layer": [
    {
      "mark": {
        "type": "point",
        "filled": true,
        "opacity": 0.7
      },
      "encoding": {
        "x": {
          "field": "Population (M)",
          "type": "quantitative",
          "axis": {
            "title": "Population (M)",
            "grid": false
          },
          "scale": {
            "type": "log",
            "base": 10
          }
        },
        "y": {
          "field": "Annual CO2 emissions (per capita)",
          "type": "quantitative",
          "axis": {
            "title": "CO₂ Emissions per Capita (t)",
            "grid": false
          }
        },
        "size": {
          "field": "Annual CO2 emissions (per capita)",
          "type": "quantitative",
          "scale": {"range": [100, 1000]},
          "legend": {
            "title": "Annual CO₂ Emissions (t)"
          }
        },
        "color": {
          "field": "Entity",
          "type": "nominal",
          "title": "Country",
          "scale": {
            "scheme": "tableau20"
          },
          "legend": null
        },
        "tooltip": [
          {"field": "Entity", "type": "nominal", "title": "Country"},
          {"field": "Annual CO2 emissions (per capita)", "type": "quantitative", "title": "CO₂ Emissions per Capita (t)"},
          {"field": "Population (M)", "type": "quantitative", "title": "Population (millions)"}
        ]
      }
    },
    {
      "mark": {
        "type": "text",
        "align": "left",
        "dx": 15,
        "dy": -5,
        "fontSize": 10,
        "color": "black"
      },
      "encoding": {
        "x": {
          "field": "Population (M)",
          "type": "quantitative",
          "scale": {
            "type": "log",
            "base": 10
          }
        },
        "y": {
          "field": "Annual CO2 emissions (per capita)",
          "type": "quantitative"
        },
        "text": {
          "field": "Entity"
        },
      },
      "transform": [
        {
          "filter": "(datum['Entity'] === 'Qatar' || datum['Entity'] === 'United States' || datum['Entity'] === 'Canada' || datum['Entity'] === 'Australia' || datum['Entity'] == 'United Arab Emirates' || datum['Entity'] == 'Brunei')"
        }
      ]
    }
  ],
  "config": {
    "font": "Open Sans",
    "axis": {
      "labelFont": "Open Sans",
      "labelFontSize": 12,
      "titleFontSize": 14
    },
    "legend": {
      "labelFont": "Open Sans",
      "labelFontSize": 12,
      "titleFontSize": 14
    },
    "title": {
      "font": "Open Sans",
      "fontSize": 16
    }
  }
});
