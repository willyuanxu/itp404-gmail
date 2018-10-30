import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		star(email, starred){
			email.set('starred', starred);
			email.save();
		}
	}
});
