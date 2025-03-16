// Utility function to clear the game area and hide it
function clearGameArea() {
  const gameArea = document.getElementById('gameArea');
  gameArea.innerHTML = "";
  gameArea.style.display = "none";
}

// Minecraft simulation (basic launcher steps)
document.getElementById('playMinecraftBtn').addEventListener('click', function() {
  clearGameArea();
  const status = document.getElementById('status');
  status.textContent = "Preparing Minecraft...";
  
  setTimeout(() => { status.textContent = "Authenticating..."; }, 1000);
  setTimeout(() => { status.textContent = "Downloading assets..."; }, 2000);
  setTimeout(() => { status.textContent = "Initializing game engine..."; }, 3000);
  setTimeout(() => {
    status.textContent = "Launching Minecraft... (Simulation)";
    document.getElementById('gameArea').style.display = "block";
    // Here you would integrate actual game-launch logic in a real project.
  }, 4000);
});

// Eaglercraft simulation (placeholder for a browser-based Minecraft clone)
document.getElementById('playEaglercraftBtn').addEventListener('click', function() {
  clearGameArea();
  const status = document.getElementById('status');
  status.textContent = "Loading Eaglercraft...";
  
  setTimeout(() => {
    status.textContent = "Eaglercraft Loaded! (Simulation)";
    const gameArea = document.getElementById('gameArea');
    gameArea.style.display = "block";
    // Insert a placeholder message.
    gameArea.innerHTML = "<div style='color:#fff; text-align:center; padding-top:200px;'>Eaglercraft would run here.</div>";
  }, 3000);
});

// Voxel.js demo using voxel-engine (if available from the CDN)
document.getElementById('playVoxelBtn').addEventListener('click', function() {
  clearGameArea();
  const status = document.getElementById('status');
  status.textContent = "Loading Voxel Demo...";
  
  setTimeout(() => {
    status.textContent = "Initializing Voxel Engine...";
    const gameArea = document.getElementById('gameArea');
    gameArea.style.display = "block";
    // Create a container for the voxel engine output
    const voxelContainer = document.createElement('div');
    voxelContainer.id = "voxelContainer";
    voxelContainer.style.width = "640px";
    voxelContainer.style.height = "480px";
    gameArea.appendChild(voxelContainer);
    
    // Check if voxelEngine is loaded from the CDN
    if (typeof voxelEngine !== 'undefined') {
      // Create a basic voxel scene: a flat plane at y=0
      var game = voxelEngine({
        generate: function(x, y, z) { return y === 0 ? 1 : 0; },
        texturePath: 'https://unpkg.com/voxel-textures@latest/'
      });
      game.appendTo(voxelContainer);
      status.textContent = "Voxel Demo Running!";
    } else {
      status.textContent = "Voxel Engine not available.";
    }
  }, 3000);
});
