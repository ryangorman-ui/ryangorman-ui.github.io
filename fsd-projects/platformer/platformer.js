$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400,300,100,20,"black");
createPlatform(800,700,200,20,"black");
createPlatform(600,600,100,20,"black");
createPlatform(900,500,100,20,"black");
createPlatform(600,400,300,20,"black");
createPlatform(300,500,200,20,"skyblue");
createPlatform(100,400,200,20,"skyblue");
createPlatform(700,300,200,20,"black");
    // TODO 3 - Create Collectables
createCollectable("diamond",800,100,0.8,0.7);
createCollectable("steve",100,200,0.8,0.7);
createCollectable("max",300,400,0.8,0.7);
  createCollectable("database",600,300,0.8,0.7);
    // TODO 4 - Create Cannons
createCannon("top",200,1100);
createCannon("right",500,1100);
createCannon("top",400,1100);
createCannon("right",200,1100);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
