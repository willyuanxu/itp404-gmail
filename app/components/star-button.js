import Component from '@ember/component';

export default Component.extend({
	tagName: 'button',
	
	init(){
		this._super(...arguments);
		this.set('buttonText', "one");
	},
	click(){
		this.set('buttonText', this.starredText);
		if (this.starred){
			this.set('starred', false);
		} else {
			this.set('starred', true);
		}
		
		this.onClick();
	}
});
