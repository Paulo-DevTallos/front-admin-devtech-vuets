import jwtDecode from 'jwt-decode';
import employeeService from "@/service/api/employeeService"

export default {
	async login({ commit }: any, data: object) {
		await employeeService.login(data).then(res => {
			const accessToken = res.data.token;

			console.log(res)
			const decode = jwtDecode(accessToken);

			commit("LOGIN", decode);

			location.replace('/app/dashboard')
		})
	}
}
