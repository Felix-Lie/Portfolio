var canvas, image, imageGray, imageRed, imageRainbow;
window.onload = async () => { //wait for the funtion and then load the image
    canvas = document.getElementById("can"),
    image = null,
    imageGray = null,
    imageRed = null,
    imageRainbow = null;
}
async function loadImage() {
    console.log(canvas);
    var fileinput = document.getElementById("photofile");
    image = await new SimpleImage(fileinput);
    imageGray = new SimpleImage(fileinput);
    imageRed = new SimpleImage(fileinput);
    imageRainbow = new SimpleImage(fileinput);
    image.drawTo(canvas);
}

function isFileUploaded() {
    if (image == null || !image.complete()) {
        alert("image not uploaded yet!")
    }
}

function printOriginal(img) {
    img.drawTo(canvas);
}


function makeGray() {
    isFileUploaded();
    // Reset Image
    for (var pixel of imageGray.values()) {
        var originalPixel = image.getPixel(pixel.getX(), pixel.getY());
        imageGray.setPixel(pixel.getX(), pixel.getY(), originalPixel)
    }
    //filter
    for (var pixel of imageGray.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setGreen(avg);
        pixel.setRed(avg);
        pixel.setBlue(avg);
    }
    imageGray.drawTo(canvas);
}


function red() {
    isFileUploaded();
    // Reset Image
    for (var pixel of imageRed.values()) {
        var originalPixel = image.getPixel(pixel.getX(), pixel.getY());
        imageRed.setPixel(pixel.getX(), pixel.getY(), originalPixel)
    }
    //filter
    for (var pixel of imageRed.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
            pixel.setRed(avg * 2);
            pixel.setGreen(avg * 0);
            pixel.setBlue(avg * 0);
        }
        else {
            pixel.setRed(255);
            pixel.setGreen(avg * 2 - 255);
            pixel.setBlue(avg * 2 - 255);
        }
    }
    imageRed.drawTo(canvas);
}


function rainbow() {
    isFileUploaded();
    // Reset Image
    for (var pixel of imageRed.values()) {
        var originalPixel = image.getPixel(pixel.getX(), pixel.getY());
        imageRed.setPixel(pixel.getX(), pixel.getY(), originalPixel)
    }
    //get 1/7 of the height
    var seventh = imageRainbow.getHeight() / 7;
    //get y and average pixel
    for (var pixel of imageRainbow.values()) {
        var y = pixel.getY();
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        //first 1/7--red
        if (y < seventh) {
            if (avg < 128) {
                pixel.setRed(avg * 2);
                pixel.setGreen(avg * 0);
                pixel.setBlue(avg * 0)
            }
            else {
                pixel.setRed(255);
                pixel.setGreen(avg * 2 - 255);
                pixel.setBlue(avg * 2 - 255)
            }
        }
        //second 2/7--orange
        else if (y >= seventh && y < seventh * 2) {
            if (avg < 128) {
                pixel.setRed(avg * 2);
                pixel.setGreen(avg * 0.8);
                pixel.setBlue(avg * 0)
            }
            else {
                pixel.setRed(255);
                pixel.setGreen(avg * 1.2 - 51);
                pixel.setBlue(avg * 2 - 255)
            }
        }
        //third 3/7--yellow
        else if (y >= seventh * 2 && y < seventh * 3) {
            if (avg < 128) {
                pixel.setRed(avg * 2);
                pixel.setGreen(avg * 2);
                pixel.setBlue(avg * 0)
            }
            else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(avg * 2 - 255)
            }
        }
        //fourth 4/7--green
        else if (y >= seventh * 3 && y < seventh * 4) {
            if (avg < 128) {
                pixel.setRed(avg * 0);
                pixel.setGreen(avg * 0);
                pixel.setBlue(avg * 0)
            }
            else {
                pixel.setRed(avg * 2 - 255);
                pixel.setGreen(255);
                pixel.setBlue(avg * 2 - 255)
            }
        }
        //fifth 5/7--blue
        else if (y >= seventh * 4 && y < seventh * 5) {
            if (avg < 128) {
                pixel.setRed(avg * 0);
                pixel.setGreen(avg * 0);
                pixel.setBlue(avg * 2)
            }
            else {
                pixel.setRed(avg * 2 - 255);
                pixel.setGreen(avg * 2255);
                pixel.setBlue(255)
            }
        }
        //sixth 6/7--indigo
        else if (y >= seventh * 5 && y < seventh * 6) {
            if (avg < 128) {
                pixel.setRed(avg * 0.8);
                pixel.setGreen(avg * 0);
                pixel.setBlue(avg * 2)
            }
            else {
                pixel.setRed(avg * 1.2 - 51);
                pixel.setGreen(avg * 2 - 255);
                pixel.setBlue(255)
            }
        }
        //seventh 7/7--violet
        else {
            if (avg < 128) {
                pixel.setRed(avg * 1.6);
                pixel.setGreen(avg * 0);
                pixel.setBlue(avg * 1.6)
            }
            else {
                pixel.setRed(avg * 0.4 + 153);
                pixel.setGreen(avg * 2 - 255);
                pixel.setBlue(avg * 0.4 + 153)
            }
        }
    }
    imageRainbow.drawTo(canvas);
}




function resetImage() {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    printOriginal(image);
}

function clearCanvas() {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    image = null;
}

