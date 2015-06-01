var keyboardHeight = 0;

$.index.open();

loadMessageBox();
function loadMessageBox() {
  	if (OS_IOS) {
		Ti.App.addEventListener('keyboardframechanged', toggleKeyboard);
	}
}

function unloadMessageBox() {
  	if (OS_IOS) {
		Ti.App.removeEventListener('keyboardframechanged', toggleKeyboard);
	}
}

function toggleKeyboard(e) {
	keyboardHeight  = Ti.App.keyboardVisible ? e.keyboardFrame.height : 0;
	$.messageBox.bottom = keyboardHeight;
	$.messages.bottom = 5 + $.txtMessage.getHeight() + keyboardHeight + 5;
}

function messageBoxResize(e) {
  	$.messages.bottom = 5 + e.height + keyboardHeight + 5;
}

function messageBoxChange(e) {
  
}