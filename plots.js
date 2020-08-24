// Bellybutton Biodiveristy Dashboard
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

// Building buildMetadata () function
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text("ID:" + result.id);
    PANEL.append("h6").text("ETHNICITY:"+result.ethnicity);
    PANEL.append("h6").text("GENDER:"+result.gender);
    PANEL.append("h6").text("AGE:"+result.age);
    PANEL.append("h6").text("LOCATION:"+result.location);
    PANEL.append("h6").text("BBTYPE:"+result.bbtype);
    PANEL.append("h6").text("WFREQ:"+result.wfreq);
  });
}



// Building buildCharts () function
function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var sortedSamples = resultArray[0];
    var topTen = sortedSamples.sample_values.slice(0, 10).reverse();
    var topIDS = sortedSamples.otu_labels.slice(0, 10).reverse();


    var trace = {
      x: topTen,
      y: topIDS,
      type: "bar",
      orientation: "h"
    };


    var data = [trace];
    
    var layout = {
    title: "Top Ten Bacteria",
    width:1200,
    height:600,
    // xaxis: { title: "Ba" },
    yaxis: { title: "Bacteria"}
    };

    Plotly.newPlot("bar", data, layout);

  });
}

// Building buildBubble function ()
function buildBubble(sample) {
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var sortedSamples = resultArray[0];
    var sampleValues = sortedSamples.sample_values;
    var otuIDS = sortedSamples.otu_ids;
    var otuLabels = sortedSamples.otu_labels;
    
    var trace1 = {
      x: otuIDS,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'Marker Size',
      showlegend: false,
      height: 600,
      width: 1200,
      xaxis:{title: "OTU ID"}
    };
    
    Plotly.newPlot('bubble', data, layout);


  });
}


function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
  buildBubble(newSample);
}

