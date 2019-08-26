Blockly.JavaScript["_7_color_block"] = function(block) {
    var text_7_color_pin = block.getFieldValue("7_COLOR_PIN");
    var variable_7_color_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("7_COLOR_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
	int V_7_COLOR_PIN =  ${text_7_color_pin};  // control coonected to digital pin 11
	#END

	// The setup() method runs once, when the sketch starts

	#SETUP           
	  // initialize the digital pin as an output:
	  pinMode(V_7_COLOR_PIN, OUTPUT);
	  digitalWrite(V_7_COLOR_PIN,LOW);  //ser the crtl off
	#END
	// the loop() method runs over and over again,
	// as long as the Arduino has power

	${variable_7_color_state} = V_7_COLOR_PIN;
    `;
    return code;
  };