Blockly.Blocks['maze_turn'] = {
    // Block for turning left or right.
    init: function() {
        var DIRECTIONS =
            [
                // [BlocklyApps.getMsg('Maze_turnLeft'), 'turnLeft'],
                ["Turn left", 'turnLeft'],
                [BlocklyApps.getMsg('Maze_turnRight'), 'turnRight']
            ];
        if (Custom.addArrows) {
            // Append arrows to direction messages.
            DIRECTIONS[0][0] += ' \u27F2';
            DIRECTIONS[1][0] += ' \u27F3';
        }
        this.setHelpUrl('http://code.google.com/p/blockly/wiki/Turn');
        this.setColour(290);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(BlocklyApps.getMsg('Maze_turnTooltip'));
    }
};

Blockly.JavaScript['maze_turn'] = function(block) {
    // Generate JavaScript for turning left or right.
    var dir = block.getFieldValue('DIR');
    return 'Maze.' + dir + '(\'block_id_' + block.id + '\');\n';
};
