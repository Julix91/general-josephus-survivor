# general-josephus-survivor
Short and verbose version of the general Josephus Survivor problem as per https://www.youtube.com/watch?v=VH9Yvy9pb84

The josephusSurvivor function takes in n the number of soldiers and k, the distance between each person who gets killed.

The josephusSurvivorVerbose function console logs the thinking process.

For example calling ```josephusSurvivorVerbouse(7,3)``` would return ```4``` and also the following console logs

```
In round 1 d starts as 1 because Math shown in the video above...
In round 2 d starts as 2 because 3 * 1 / 2 is 1.5 (which we Math.ceil)
In round 3 d starts as 3 because 3 * 2 / 2 is 3 (which we Math.ceil)
In round 4 d starts as 5 because 3 * 3 / 2 is 4.5 (which we Math.ceil)
In round 5 d starts as 8 because 3 * 5 / 2 is 7.5 (which we Math.ceil)
In round 6 d starts as 12 because 3 * 8 / 2 is 12 (which we Math.ceil)
In round 7 d starts as 18 because 3 * 12 / 2 is 18 (which we Math.ceil)
Since 18 is greater than or equal to 14 that ends the loop.
Time to return k * n + 1 - d, which is 3 * 7 + 1 - 18 or 4.
```
