import {Dispatcher} from 'flux';
import TestStore from '../stores/TestStore.js';

let AppDispatcher = new Dispatcher();


AppDispatcher.register(action=>{
	switch(action.actionType){
		case 'ADD_NEW_ITEM':
			TestStore.addNewItemHandle(action.text);
			TestStore.emitChange();
			break;
		case 'DELET_ITEM':
			TestStore.deletItemHandle(action.index);
			TestStore.emitChange();
			break;
	}
})
export default AppDispatcher;