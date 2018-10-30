import Component from '@ember/component';

export default Component.extend({
	tagName: 'button',
	
	init(){
		this._super(...arguments);
		this.set('buttonText', "one");
	},
	click(){
		this.onClick(!this.starred);
	}
});
