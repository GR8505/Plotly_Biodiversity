# Plotly_Biodiversity
-----------------------------------------------------------------------------------------------------
## Executive Overview ##
-----------------------------------------------------------------------------------------------------
Creating the Bellybutton Biodiversity dashboard was quite interesting to say the least.  The syntax 
for plotly wasn't that complicated but I found parsing through the samples.json file to be a little
challenging.  Honestly, I was overcomplicating the process as I assumed that the sample_values data
had to be sorted and mapped to the values in the otu_ids and otu_labels arrays.  This is what I had 
initially attempted for the creation of the bar chart.  However, it turned out that the data was 
already sorted and all I needed to do was perform slice and reverse functions.

Also, I did omit the washing frequency gauge for the time being.  This visualisation will be updated 
at a later date. Creation of the demographic info box and the scatter plot were not that vexing as I 
managed to complete these elements with ease.

----------------------------------------------------------------------------------------------------
