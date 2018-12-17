window.onload = function()
		{ 

   var myColour = localStorage.getItem("myColour");

  if (myColour == null){
  
    var myColour = "005500";
    console.log("Colour is Null");
    document.body.style.backgroundColor = myColour;
  
  }
  else
  {
    document.body.style.backgroundColor = myColour;
  }
  $('.ColourPicker').on('change',function() {
    myColour = this.value;
    console.log(myColour);
    document.body.style.backgroundColor = myColour;
    localStorage.setItem("myColour", myColour);
  
  });
  
  var startBox = $(".ImageSlider").find("img").first();
  var box = startBox;
  box.show();
  
  function myLoop()
  {
    window.setTimeout(function(){
        box.fadeOut(1000);
        box = box.next("img");
        if(!box.length)
          box = startBox;
        box.fadeIn(1000, myLoop);
    }, 3000);
  }
  myLoop();
  
  var canvas = document.getElementById('paint');
  var sketch = document.getElementById('sketch');
  var ctx = canvas.getContext('2d');
  var sketch_style = getComputedStyle(sketch);
  canvas.width = 750;
  canvas.height = 500;
  
  var mouse = {x: 0, y: 0};
   
  canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  }, false);
  
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  
  ctx.strokeStyle = "red";
  $("body").on("click", ".colours", function(){
    ctx.strokeStyle = $(this).attr("data-colour");
  });
  
  $("body").on("click", ".BrushSize", function(){
    ctx.lineWidth = $(this).attr("data-size");
  });
   
  canvas.addEventListener('mousedown', function(e) {
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
   
      canvas.addEventListener('mousemove', onPaint, false);
  }, false);
   
  canvas.addEventListener('mouseup', function() {
      canvas.removeEventListener('mousemove', onPaint, false);
  }, false);
   
  var onPaint = function() {
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
  };
  
  }



