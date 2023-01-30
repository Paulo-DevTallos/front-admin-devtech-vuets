export default {
	LOGIN(state: any, payload: any) {
		state.employee_name = payload.employee_name;
		state.employee_email = payload.employee_email;
		state.employee_id = payload.employee_id;
	}
}
