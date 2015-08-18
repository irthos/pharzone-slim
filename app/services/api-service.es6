(function () {
	'use strict';
	let fb = new Firebase('https://pharzone.firebaseio.com/v2/');

	class Api {
		constructor($firebaseObject, $firebaseArray) {
			let db = {}, methods = {}, models = {};
			this.data = {};
			this.methods = {};
			this.models = {};

			/**/
			/**/
			/*      DATA     */
			/**/
			/**/

			db.obj = $firebaseObject(fb).$loaded().then((data) => {
				this.data.object = data;
			});
			db.arr = $firebaseArray(fb).$loaded().then((data) => {
				this.data.array = data;
			});

			/**/
			/**/
			/*      Methods     */
			/**/
			/**/

			methods.save = (args) => {
				console.log('save..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.add = (args) => {
				console.log('add..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.remove = (args) => {
				console.log('remove..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.login = (args) => {
				// Expects: email, pass
				console.log('login..', args.email + ': ' + args.pass);
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.logout = (args) => {
				console.log('logout..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.register = (args) => {
				console.log('register..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.checkout = (args) => {
				console.log('checkout..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.total = (args) => {
				console.log('checking total..');
				var total = 0;
				angular.forEach(args, (arg) => {
					total += arg.total;
				});
				return total;
			};
			this.methods = methods;

			/**/
			/**/
			/*      MODELS     */
			/**/
			/**/

			// Auth

			models.login = {
				name: 'login',
				submit: methods.login,
				inputs: {
					email: {
						label: 'email',
						family: 'input',
						type: 'email',
						layout: {},
						model: 'email'
					},
					pass: {
						label: 'password',
						family: 'input',
						type: 'password',
						layout: {},
						model: 'pass'
					}
				}
			};
			models.register = {
				name: 'register',
				submit: methods.register,
				inputs: {
					email: {
						label: 'email',
						family: 'input',
						type: 'email',
						layout: {},
						model: 'email'
					},
					pass: {
						label: 'password',
						family: 'input',
						type: 'password',
						layout: {},
						model: 'pass'
					},
					name: {
						label: 'name',
						family: 'input',
						type: 'text',
						layout: {},
						model: 'name'
					},
					about: {
						label: 'about',
						family: 'textarea',
						type: '',
						layout: {},
						model: 'about'
					},
					city: {
						label: 'Choose your city',
						family: 'select',
						type: '',
						layout: {},
						model: 'city',
						options: ['casablanca', 'nairobu']
					},
					userType: {
						label: 'Which are you?',
						family: 'radio',
						type: 'radio',
						layout: {},
						model: 'userType',
						options: ['lab', 'pharmacist']
					},
					hearedAbout: {
						label: 'How did you hear about us?',
						family: 'checkbox',
						type: 'checkbox',
						layout: {},
						model: 'heardAbout',
						options: ['Store', 'Friend']
					},
					recommend: {
						label: 'How likely are you to recommend us?',
						family: 'input',
						type: 'range',
						layout: {},
						model: 'recommend',
						min: 0,
						max: 100,
						step: 4
					}
				}
			};

			// Shop

			models.cart = {
				type: 'basic',
				caption: 'Adjust your shopping cart before checking out.',
				summery: 'This shopping cart has all the items ready for purchase',
				tHead: {
					'name':{type: 'string', width:'38%', action:methods.checkout, actionName: 'Checkout Now'},
					'price':{type:'string', width:'20%'},
					'qty':{type:'string', width:'10%'},
					'total':{type:'string', width:'10%'}},
				tFoot: {'default':{type:'string', value:'Observe your total and proceed to checkout.', colspan:2},'checkout':{type:'button', action: methods.checkout},'gTotal':{type:'watcher', action: methods.total}},
				name: 'cart'
			};
			this.models = models;
		}

		get() {
			return 'Api';
		}
	}

	/**
	 * @ngdoc service
	 * @name pharzone.service:Api
	 *
	 * @description
	 *
	 */
	angular
		.module('pharzone')
		.service('Api', Api);
}());