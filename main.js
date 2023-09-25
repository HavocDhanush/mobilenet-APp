var object_result = ''; 

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded () {
  console.log('Model Loaded!');
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

var previous_result = '';

function gotResult() {
  if (error) {
    console.log(error);
  } else {
    if( (results[0].confidence > 0.5) && (previous_result != results[0].label)) {
      console.log(results);
      previous_result = result[0].label;
      //var synth = window.speechSynthesis;
      //speak_data = 'Object is detected as - '+results[0].label
      //var utterThis = window.SpeechSynthesisUtterance(speak_data);
      //synth.speak(utterThis);

      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }

}

/*function speakResults() {
  //var synth = window.speechSynthesis;
  //speak_data = 'Object is detected as - '+previous_result;
  //var utterThis = window.SpeechSynthesisUtterance(speak_data);  
  //synth.speak(utterThis);
} */


function setup() {
  canvas = createCanvas (300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw () {
  image (video, 0, 0, 300, 300);
}


