var Custom = {};

BlocklyApps.LANGUAGES = ['en'];
BlocklyApps.LANG = BlocklyApps.getLang();

Custom.init = function() {
    console.log("starting...");
    BlocklyApps.init();

    var rtl = BlocklyApps.isRtl();
    var toolbox = document.getElementById('toolbox');
    Blockly.inject(document.getElementById('blockly'),
                   {path: '../../blockly-read-only/',
                    rtl: rtl,
                    toolbox: toolbox,
                    trashcan: true});
}

window.addEventListener('load', Custom.init);
