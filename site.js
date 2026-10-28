// Clips play while they're on screen and pause when they leave it. With reduced
// motion, or without this script, they keep their controls and never autoplay.
(function () {
  var clips = document.querySelectorAll("video[data-auto]");
  if (!clips.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var clip = entry.target;
      if (entry.isIntersecting) {
        var playing = clip.play();
        // A blocked autoplay gets its controls back; a play cut short by scrolling away doesn't.
        if (playing && playing.catch) playing.catch(function (err) { if (err.name === "NotAllowedError") clip.controls = true; });
      } else {
        clip.pause();
      }
    });
  }, { threshold: 0.4 });
  clips.forEach(function (clip) {
    clip.controls = false;
    seen.observe(clip);
  });
})();
