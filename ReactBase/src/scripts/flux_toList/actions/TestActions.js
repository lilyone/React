import AppDispatcher from '../dispatchers/AppDispatcher.js';

export default {
	addNewItem(text){
		AppDispatcher.dispatch({
			actionType:'ADD_NEW_ITEM',
			text :text
		})
	},
	deletItem(index){
		AppDispatcher.dispatch({
			actionType:'DELET_ITEM',
			index :index
		})
	}
}
