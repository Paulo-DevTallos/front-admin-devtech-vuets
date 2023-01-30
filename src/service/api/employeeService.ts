import { ApiService } from "./idnex";

export default {
	login: (data: object) => {
		return ApiService.post('employee/auth', data);
	}
}
