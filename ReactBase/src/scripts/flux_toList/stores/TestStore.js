import {EventEmitter} from 'events';

//ES6 merge 对象用的    assign合并对象
export default Object.assign({},EventEmitter.prototype,{
	items:['abc'],
	getAll(){
		return this.items;
	},
	addNewItemHandle(text){
		this.items.push(text);
	},
	deletItemHandle(index){
		this.items.splice(index,1);
	},
	emitChange(){
		this.emit('change')
	},
	addChangeListener(callback){
		this.on('change',callback);
	},
	removeChangeListener(callback){
		this.removeListener('change',callback)
	}
})
