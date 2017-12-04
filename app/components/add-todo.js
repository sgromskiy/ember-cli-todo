import Component from '@ember/component';

export default Component.extend({
	title: '',
	actions:{
		passData(){
			this.get('onEnter')(this.get('title'));
			this.set('title', '');
		}
	}
});
