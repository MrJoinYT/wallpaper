# wallpaper
This is my first HTML Wallpaper, which can change due to the sunrise or sunset. You can connect it to your own Smart Home or other applications trough some javascript.


To use this, you need to adjust your own lang and long in the weather.js:

**assets/js/weather.js -> Line 21, 22**

To get your latitude and longitude, go to Google maps and click where you want to get the data from.
Then copy the two numbers from the popup which comes up from the bottom.
![image](https://user-images.githubusercontent.com/71146533/218697846-c1c929ef-5882-436c-a481-eaf3cade6087.png)

You then need to change the numbers to be in this format:
(for example, Berlin:)

    const latitude = 52.515789;
    const longitude = 13.409378;
    
This is not required, but you probably will need to change the numbers in assets/js/wpMove.js 
to fit you resolution. At the moment they will only work on 2x1 1920x1080 Screens.
