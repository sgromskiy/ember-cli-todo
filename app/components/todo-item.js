import Component from '@ember/component';

export default Component.extend({
	classNames: ['todo-item'],
	isEdited: false,
	actions:{
		toggleEdit(){
			this.toggleProperty('isEdited');
		},
		saveEdit(todo){
			this.get('save')(todo);
			this.toggleProperty('isEdited');
		},
	}
});
