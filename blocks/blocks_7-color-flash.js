Blockly.Blocks['_7_color_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("7 COLOR LED");
    this.appendValueInput("7_COLOR_DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};