//create image classifer
let mobilenet;
let imageToPredict;


//Callback func for when the model is ready
function modelReady() {
    console.log('Model ready');

    //predict what the image is
    mobilenet.predict(imageToPredict,gotResults);
}

//Show the results of prediction
function gotResults(error,result) {

    //make sure theres no errors
    if(error) {
        console.error(error);
    } else {
        console.log(result);
        let label = result[0].className
        let prob = result[0].probability

        //Show the best predictions
        fill(0);
        textSize(64);
        text(label,10,height-100);
        createP(label)
        createP(prob)
    }
}

//once an image is ready, show it
function imageReady() {
    image(imageToPredict,0,0,width,height);
}

function setup() {
    createCanvas(640,480);
    background(0);

    //create and show an image
    imageToPredict = createImg('images/rhino.jpg',imageReady)
    imageToPredict.hide()

    //params are the name of the model supported by ml5
    //and a callback function(yuck!).
    mobilenet = ml5.imageClassifier('MobileNet',modelReady);
}

