# Titanium UI - Resizable Textarea

Resizable Textarea can be used for message box in chat apps

![Textarea example](http://i.imgur.com/KvLEHgy.png)

====

View
	
	<Widget src="com.imobicloud.textarea" class="imc-textarea" maxHeight="100" onResize="txtMessageResize">
		<Label role="hint" class="imc-textarea-hint" platform="ios">Type your message</Label>
		<TextArea role="textarea" class="imc-textarea-textarea" hintText="Type your message"/>
	</Widget>
	
Styles
	
	".imc-textarea": { height: Ti.UI.SIZE, bottom: 5, left: 5, right: 5 }
		".imc-textarea-hint": { top: 7, left: 5, font: { fontSize: 12.5, fontFamily: 'HelveticaNeue-Medium' }, color: '#b7b7b7', touchEnabled: false, visible: true }
		".imc-textarea-textarea": { width: '100%', height: Ti.UI.SIZE, font: { fontSize: 12.5, fontFamily: 'HelveticaNeue-Medium' }, color: '#b7b7b7', backgroundColor: 'transparent', suppressReturn: false }
    
Controller
	
    function txtMessageResize(e){
    	alert(e.height);
    }

Changes log:

- Remove change event
- Remove updateUI function
- Remove blur function
- Remove getValue + setValue function
- Remove hintText property + setHintText function
- Rename classnames: ET-xx to imc-xx