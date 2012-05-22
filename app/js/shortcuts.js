/**
 * Wraps and implements our app's keyboard shortcuts.
 *
 * For this, it needs access to all the controllable parts of the app.
 *
 * In the future, those could be made customizable.
 *
 * @constructor
 */
Shortcuts = function(app) {
    var audio = app.audio;
    $(document).on('keydown', function(e) {
        // Do not run any shortcuts if a modal window is active.
        if ($('.modal-backdrop').is(':visible'))
            return;

        var key = e.keyCode;

        if (key == 38) { // up
            app.setPlaybackRate('+0.1');
            return false;
        }
        else if (key == 40) {  // down
            app.setPlaybackRate('-0.1');
            return false;
        }
        else if (key == 32 || key == 13) { // space or return
            if (audio.paused) {
                audio.play();
                return false;
            }
            else if (key == 13 || e.ctrlKey) {  // ctrl+space or return
                audio.pause();
                return false;
            }
        }
        else if (
                (e.ctrlKey && key == 37) ||     // left
                key == '65' ||                  // a
                key == 100) {                   // numpad 4
            audio.currentTime -= 1;
            return false;
        }
        else if (
                (e.ctrlKey && key == 39) ||     // right
                key == 68 ||                    // d
                key == 102) {                   // numpad 6
            audio.currentTime += 1;
            return false;
        }
    });
}