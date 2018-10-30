import Component from '@ember/component';

export default Component.extend({
	classNames: ['email'],
	actions: {
		star(params, isStarred){
			this.star(params, isStarred);
		}
	}
});
