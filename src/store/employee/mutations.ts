export default {
	LOGIN(state: any, payload: any) {
		state.employee_name = payload.name;
		state.employee_email = payload.email;
		state.employee_id = payload.id;
	}
}
