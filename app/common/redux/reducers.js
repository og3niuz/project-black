import _ from 'lodash';
import { CREATE_PROJECT, DELETE_PROJECT } from './actions.js'


const initialState = {
	projects: [],
	scopes: []
}

function create_project(state = initialState, action) {
	switch (action.type) {
		case CREATE_PROJECT:
			const message = JSON.parse(action.data);

			if (message["status"] == 'success') {
				var state_new = Object.assign({}, state);

				state_new["projects"].push({
					"project_name": message["new_project"]["project_name"],
					"project_uuid": message["new_project"]["project_uuid"],
					"comment": message["new_project"]["comment"]
				});

				return state_new;
			}
		default:
			return state;
	}
}