Blockly.Blocks["_7_color_block"] = {
    init: function() {
      this.appendDummyInput().appendField("7 COLOR LED");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "7_COLOR_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("7_COLOR_STATE"),
          "7_COLOR_STATE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };