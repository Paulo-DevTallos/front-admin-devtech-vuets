import { ApiService } from "./api/idnex"

export default {
	getCustomers: () => {
		return ApiService.get('/customer')
	}
}
