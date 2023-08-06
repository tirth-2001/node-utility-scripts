import http from 'k6/http'
import { sleep } from 'k6'
export const options = {
	vus: 100,
	duration: '60s',
}
export default function () {
	http.get('http://localhost:8080/api/v1/product/all/sql')
	sleep(1)
}
