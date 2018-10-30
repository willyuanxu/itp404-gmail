import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	id(i){
		return i; 
	},
	from(){
		return faker.internet.email();
	},
	to(){
		return faker.internet.email();
	},
	subject(){
		return faker.lorem.text();
	},
	message(){
		return faker.lorem.paragraphs();
	},
	starred(){
		return false;
	}
});
