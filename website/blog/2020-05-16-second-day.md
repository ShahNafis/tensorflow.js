---
title: Running a pretrained image model 
author: Shah Nafis Rafique
---

Second day trying to use TensorFlow.js/ml5.js where I run a pretrained image
model on some test images.

<!--truncate-->

The next video I watch was
[here](https://www.youtube.com/watch?v=yNkAuWz5lnY&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y).
So one thing to know about a pretrained model is "What is the model trained on".
For example if a model was only trainged to recognize the colors red or blue
then giving it the color green might not go so well for it since it has not been
trained on green. The example for the video can be found
[here](https://github.com/ml5js/ml5-library/blob/a7ef75408d35e9dd1b89f3d4bcb36783cb966590/src/utils/IMAGENET_CLASSES.js)
show all the classes that the imagenet knows.

So time for actual coding. I got the starting code from
[here](https://github.com/CodingTrain/website/tree/master/learning/ml5/1.1_image_classification/P5).
I just followed the video to run the pretrained model, this is what my code
looks like
[here](https://github.com/ShahNafis/tensorflow.js/tree/master/src/tutorial/Image_Classification_with_MobileNet)

My results where as follows

![result1](https://raw.githubusercontent.com/ShahNafis/tensorflow.js/master/src/tutorial/Image_Classification_with_MobileNet/results/try1.PNG)

![result2](https://raw.githubusercontent.com/ShahNafis/tensorflow.js/master/src/tutorial/Image_Classification_with_MobileNet/results/try2.PNG)

![result3](https://raw.githubusercontent.com/ShahNafis/tensorflow.js/master/src/tutorial/Image_Classification_with_MobileNet/results/try3.PNG)

![result4](https://raw.githubusercontent.com/ShahNafis/tensorflow.js/master/src/tutorial/Image_Classification_with_MobileNet/results/try4.PNG)

![result5](https://raw.githubusercontent.com/ShahNafis/tensorflow.js/master/src/tutorial/Image_Classification_with_MobileNet/results/try5.PNG)

![result6](https://raw.githubusercontent.com/ShahNafis/tensorflow.js/master/src/tutorial/Image_Classification_with_MobileNet/results/try6.PNG)

![result7](https://raw.githubusercontent.com/ShahNafis/tensorflow.js/master/src/tutorial/Image_Classification_with_MobileNet/results/try7.PNG)

This is not all of the images I had, just a few of them. Some images where
predicted correctly and some where not (the dragon and mammoth where way off as
expected).

The hard part of this wasnt actually getting ml5 to work but rather having a
webserver to host the html page(I really dislike just vanilla node.js for
serving html pages, I think I will make a express version 😂 ).