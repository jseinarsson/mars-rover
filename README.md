# Module 4: Javascript/React

## (See the site live here)[https://jseinarsson.github.io/mars-rover/#/]

This is my React project. I created a SPA that shows images from (NASA's _Astronomy Picture of the Day_ API)[https://apod.nasa.gov/apod/]. My app currently tiles all the images (but not videos) from the year 2019 and allows you to click through each image to see the title, author (if relevant) and description/explanation text included in the API.

I want to be able to add the functionality to change the year (probably limit it to the 21st century, although the project started in 1995) but haven't implemented it yet. I have this crazy little idea that you're able to click the year in the header to cycle through the years (which I concur is terrible navigation, but I have a slight affinity to brutalism), but so far have only implemeneted the clicking (using a useState hook), so that's there as a little novely.

### In this project I used:

- (**create-react-app**)[https://create-react-app.dev] to build the app
- (**axios**)[https://github.com/axios/axios] to handle promises and the fetching of the API
- (**React Router**)[https://reactrouter.com/web/guides/quick-start] to handle routing in the SPA

I think that's it?

Anyway, you can have a look through my components, views and the custom hook I created to handle the API, they're all in the src folder above.
