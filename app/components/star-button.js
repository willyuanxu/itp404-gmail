import Component from '@ember/component';

export default Component.extend({
	tagName: 'button',
	classNames: ['starbutton'],
	classNameBindings: ['isStarred:checked'],
	isStarred: false,
	
	init(){
		this._super(...arguments);
		this.set('isStarred', this.starred)
	},
	click(){
		this.onClick(!this.starred).then(() => {
			this.set('isStarred', this.starred);
		});
	}
});
