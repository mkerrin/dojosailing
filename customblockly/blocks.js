Blockly.Blocks['boat_turn'] = {
    // Block for turning left or right.
    init: function() {
        var DIRECTIONS =
            [
                // [BlocklyApps.getMsg('Maze_turnLeft'), 'turnLeft'],
                ["left", 'turnLeft'],
                ["right", 'turnRight']
            ];

        this.setHelpUrl('http://code.google.com/p/blockly/wiki/Turn');
        this.setColour(200);
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabel('turn'))
            .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR')
            .appendField(new Blockly.FieldLabel('by'))
            .appendField(new Blockly.FieldAngle(), 'ANGLE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(BlocklyApps.getMsg('Maze_turnTooltip'));
    }
};

Blockly.Blocks['boat_speed'] = {
    // Block for turning left or right.
    init: function() {
        this.setHelpUrl('http://code.google.com/p/blockly/wiki/Turn');
        this.setColour(150);
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabel('set speed to'))
            .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'SPEED')
            .appendField(new Blockly.FieldLabel('%'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(BlocklyApps.getMsg('Maze_turnTooltip'));
    }
};

Blockly.JavaScript['boat_turn'] = function(block) {
    // Generate JavaScript for turning left or right.
    var dir = block.getFieldValue('DIR');
    return 'Maze.' + dir + '(\'block_id_' + block.id + '\');\n';
};
