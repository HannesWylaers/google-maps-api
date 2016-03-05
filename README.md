# Customizing A Google map with the Google-maps-API & Snazzy maps
Styling a Google map with Snazzy maps is an excellent example of where designers and developers can work together. The designer styles the Google map so it fits in the design. When finished styling the map, the designer copies the generated Javascript style array and passes the code to the developer. This style array contains all the generated styles for the styled map according to the design.

The developer uses the code in his Google map API implementation. Next, the developer can choose, in cooperation with the designer, which default scales offered by Google maps need to be visible. 

Keep in mind that a Google map with its default styling has a certain level of recognizability. Everybody knows, when seeing the default styled Google map, that it is a Google Map. If the map is custom styled, the recognizability will somehow be lost.

## Implementing the custom styled map consists of 3 parts. 
1. The designer: styles the map with Snazzy maps.
2. The developer adds the generated code in the Google map API implementation
3. The developer configures the styled map

## 1: Snazzy maps
- The designer goes to https://snazzymaps.com/ and selects 'Create' in the upper menu
- The designer chooses the preferred Google map styling according to the design
- Once done, the designer passes the generated Javascript style array to the developer

## 2: Google maps API
- The developer adds the generated styles in a variable 'var styles'
- The developer can choose which buttons he wants to show on the map: for example the '+' and '-' buttons for zooming
- The developer can choose the type of the map: a satellite or a normal map
- The developer can add a custom marker on the map
- The developer can ...
- I've created a full example which you can find in the repo

## 3: Adding the map to a page
On the page where you want to show the map, you create a <div> with an 'id' equal to 'map'. 
You leave the <div> empty. 
```shell
For example <div id="map"></div>. 
```
The Google map API will automatically fill this div based on the information you gave in the Javascript.


### ** HAPPY MAPPING **