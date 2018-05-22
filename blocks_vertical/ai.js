'use strict';

goog.provide('Blockly.Blocks.ai');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['ai_playAudio'] = {
    init: function() {
		this.jsonInit({
			"message0": "播放 %1 ",
			"args0": [
				{
					"type": "input_value",
					"name": "AIAUDIO"
				}
			],
			"category": Blockly.Categories.ai,
			"extensions": ["colours_ai", "shape_statement"]
		});
	}
};

Blockly.Blocks['ai_picRecognition'] = {
    init: function() {
		this.jsonInit({
			"message0": "2秒后识别 %1 图片",
			"args0": [
				{
					"type": "field_dropdown",
					"name": "AIPIC",
					"options": [
						['菜品', 'menuRecognition'],
						['人脸', 'faceRecognition'],
						['主体', 'mainRecognition'],
						['植物', 'plantRecognition'],
						['动物', 'animalRecognition'],
						['文字', 'wordRecognition'],
						['logo', 'logoRecognition']
					]
				}
			],
			"category": Blockly.Categories.ai,
			"extensions": ["colours_ai", "shape_statement"]
		});
    }
};

Blockly.Blocks['ai_picResult'] = {
	init: function() {
		this.jsonInit({
			"message0": "图片识别结果",
			"category": Blockly.Categories.ai,
			"checkboxInFlyout": true,
			"extensions": ["colours_ai", "output_number"]
		});
	}
};

Blockly.Blocks['ai_speechRecognition'] = {
	init: function() {
	  this.jsonInit(
		{
			"message0": "识别 %1 的语音",
			"args0": [
				{
					"type": "field_dropdown",
					"name": "AISPE",
					"options": [
						['2秒', '3000'],
						['3秒', '4000'],
						['5秒', '6000']
					]
				}
			],
			"colour": Blockly.Colours.ai.secondary,
			"colourSecondary": Blockly.Colours.ai.secondary,
			"colourTertiary": Blockly.Colours.ai.tertiary,
			"extensions": ["colours_ai", "shape_statement"]
		});
	}
};

Blockly.Blocks['ai_speechResult'] = {
	init: function() {
		this.jsonInit({
			"message0": "语音识别结果",
			"category": Blockly.Categories.ai,
			"checkboxInFlyout": true,
			"extensions": ["colours_ai", "output_number"]
		});
	}
};
