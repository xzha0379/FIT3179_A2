var map = "choropleth_map.json";
vegaEmbed("#choropleth_map", map).then(function(result){
    // Access vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);