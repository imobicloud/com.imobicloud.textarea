# Titanium UI - Resizable Textarea

Resizable Textarea can be used for message box in chat apps

![Textarea example](http://i.imgur.com/KvLEHgy.png)

====

View
	
	<Widget id="txtMessage" src="com.imobicloud.textarea" 
		class="txt-message" 
		maxHeight="80" 
		hintText="Type here..." 
		onChange="txtMessageChange" 
		onResize="txtMessageResize"/>
	
Styles
	
	// app.tss
	".imc-textarea": { height: Ti.UI.SIZE, bottom: 5, left: 5, right: 5 }
		".imc-textarea-hint": { top: 7, left: 5, font: { fontSize: 12.5, fontFamily: 'HelveticaNeue-Medium' }, color: '#b7b7b7', touchEnabled: false, visible: true }
		".imc-textarea-textarea": { width: '100%', height: Ti.UI.SIZE, font: { fontSize: 12.5, fontFamily: 'HelveticaNeue-Medium' }, color: '#b7b7b7', backgroundColor: 'transparent', suppressReturn: false }
    
	".txt-message": { backgroundColor: 'red' }
	
Controller

	// get value
	$.txtMessage.getValue()
    
    // set value
	$.txtMessage.setValue('Test message');
    
	function txtMessageChange(e){
    	alert(e.value);
    }
	
    function txtMessageResize(e){
    	alert(e.height);
    }

Changes log:

- Rename classnames: ET-xx to imc-xx