import jwtDecode from 'jwt-decode';
import employeeService from "@/service/api/employeeService"

export default {
	async login({ commit }: any, data: object) {
		await employeeService.login(data).then(res => {
			const accessToken = res.data.token;

			const decode = jwtDecode(accessToken);
			console.log(res, decode)

			commit("LOGIN", decode);

			location.replace('/app/dashboard')
		})
	}
}
