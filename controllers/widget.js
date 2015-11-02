/*
 args = {
 	maxHeight: 80
 }
 * */
var args = arguments[0] || {};
args.maxHeight = args.maxHeight ? parseInt(args.maxHeight, 10) : 80;

init();
function init() {
	var exclude = ['id', 'maxHeight', 'children'];
	$.container.applyProperties(_.omit(args, exclude));
	
	if (args.children) {
		_.each(args.children, function(child) {
			var role = child.role;
			if (role) {
				$[role] = child;
				if (role == 'textarea') {
					// fix change event is not fired
					child.setValue = function(value) {
						this.value = value;
  						textareaChange.call(this);
					};
					child.addEventListener('change', textareaChange);
					if ($.container.height == Ti.UI.SIZE) {
						child.height = Ti.UI.SIZE;
						child.addEventListener('postlayout', textareaPostlayout);
					} else {
						child.height = '100%';
					}
				}
			}
			$.container.add(child);
		});
		args.id = null;
		args.children = null;
	}
};

function textareaChange(e) {
	var value = this.value;
	
	// toggle hint text
  	OS_IOS && $.hint[ value.length > 0 ? 'hide' : 'show' ]();
  	
  	// reset text-area height
  	if (this._len && value.length < this._len) {
  		this.height = Ti.UI.SIZE;
  	}
  	
  	$.trigger('change', { value: value });
}

// limit text-area height, less than args.maxHeight
function textareaPostlayout(e) {
  	if (this.rect.height > args.maxHeight) {
  		this._len = this.value.length;
  		this.height = args.maxHeight;
  	}
  	
  	$.trigger('resize', { height: this.rect.height });
}

exports.getHeight = function() {
	return $.textarea.rect.height;
};