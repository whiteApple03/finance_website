export default function(instance) {
	return {
		register(payload) {
			return instance.post('auth/register', payload)
		}
	}
}