import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
	store: Ember.inject.service('store'),
	
	total:  Ember.computed('todos.[]', function(){
		return this.get('todos');
	}),
	incomplete:  Ember.computed.filterBy('todos', 'complited', false),

	init() {
		this._super(...arguments);
		this.todos = [];
	},

	willRender(){
		let todos = this.get('store').peekAll('todo');
		this.set('todos', todos);
	},

	actions: {
		addTodo(title){
			let newTodo = this.get('store').createRecord('todo', {
				title,
				complited: false
			});
			newTodo.save();
		}
	}
});
