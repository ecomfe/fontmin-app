/**
 * @file Fontmin App
 * @author Firede <firede@firede.us>
 */

/**
 * 初始化目录
 *
 * Mac 下 Edit/Window 目录需要初始化，否则复制粘贴快捷键无法调起
 */
function initMenu() {
    var gui = require('nw.gui');
    var win = gui.Window.get();
    var nativeMenuBar = new gui.Menu({
        type: 'menubar'
    });

    nativeMenuBar.createMacBuiltin('Fontmin');
    win.menu = nativeMenuBar;
}

function preventDefault(evt) {
    evt.preventDefault();
    return false;
}

/**
 * Main
 */
window.addEventListener('load', function () {
    // only for mac
    if (process.platform === 'darwin') {
        initMenu();
    }

    // Prevent drag events
    window.ondragover = preventDefault;
    window.ondrop = preventDefault;
});
