import Controller from '@ember/controller';
import window from 'ember-window-mock';


export default Controller.extend({
	actions: {
		backToInbox(event){
			event.preventDefault();
			this.transitionToRoute('index');
		},
		deleteEmail(model){
			let confirmed = window.confirm("Are you sure you want to delele this email?");
			if (confirmed){
				model.destroyRecord();
				this.transitionToRoute('index');
			}
		}
	}
});
