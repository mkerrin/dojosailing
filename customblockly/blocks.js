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
Blockly.Blocks['boat_ifElse'] = {
  // Block for 'if/else' conditional if there is a path.
  init: function() {
    var DIRECTIONS =
        [
		[BlocklyApps.getMsg('Maze_pathAhead'), 'isPathForward'],
         [BlocklyApps.getMsg('Maze_pathLeft'), 'isPathLeft'],
         [BlocklyApps.getMsg('Maze_pathRight'), 'isPathRight']
		  //["left", 'isPathLeft'],
                //["right", 'turnRight']
				];
    // Append arrows to direction messages.
    DIRECTIONS[1][0] += ' \u21BA';
    DIRECTIONS[2][0] += ' \u21BB';
    this.setColour(210);
    this.appendDummyInput()
	.appendField(new Blockly.FieldLabel('if wind is'))
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.appendStatementInput('DO')
        .appendField(BlocklyApps.getMsg('Maze_doCode'));
    this.appendStatementInput('ELSE')
        .appendField(BlocklyApps.getMsg('Maze_elseCode'));
    this.setTooltip(BlocklyApps.getMsg('Maze_ifelseTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['boat_ifElse'] = function(block) {
  // Generate JavaScript for 'if/else' conditional if there is a path.
  var argument = 'Maze.' + block.getFieldValue('DIR') +
      '(\'block_id_' + block.id + '\')';
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO');
  var branch1 = Blockly.JavaScript.statementToCode(block, 'ELSE');
  var code = 'if (' + argument + ') {\n' + branch0 +
             '} else {\n' + branch1 + '}\n';
  return code;
};