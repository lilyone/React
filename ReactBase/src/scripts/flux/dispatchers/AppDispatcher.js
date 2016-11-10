import {Dispatcher} from 'flux';
import ListStore from '../stores/ListStore.js';

let AppDispatcher = new Dispatcher();


AppDispatcher.register(action=>{
	switch(action.actionType){
		case 'ADD_NEW_ITEM':
			ListStore.addNewItemHandle(action.text);
			ListStore.emitChange();
			break;
	}
})
export default AppDispatcher;