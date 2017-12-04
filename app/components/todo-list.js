import Component from '@ember/component';

export default Component.extend({
	complitedAll:false,
	isFiltered: false,
	filteredTodos: Ember.computed('todos.[]', 'isFiltered', function(){
		if(this.get('isFiltered')){
		return this.get('todos').filter((t) => t.get('complited') === false)
		} else{
			return this.get('todos');
		}
	}),
	actions:{
		hideComplited(){
		this.toggleProperty('isFiltered');
		},
		updateTodo(todo){
			todo.toggleProperty('complited');
			todo.save();
		},
		saveTodo(todo){
			todo.save();
		},
		checkAll(todos){
			var state = this.get('complitedAll');
			todos.forEach((todo) => {
				todo.set('complited', !state);
			})
			this.set('complitedAll', !state);
			todos.save();
		},
		deleteTodo(todo){
			todo.deleteRecord();
			todo.save();
		}
	}
});
