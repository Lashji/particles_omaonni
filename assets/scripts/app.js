/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
console.log("app")
particlesJS.load('particles-js', 'assets/scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });