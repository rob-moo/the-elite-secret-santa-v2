export default class GiftClient {
    async getGiftsByUser(userId: string) {
        let response: object;

        try {
            const apiResponse = await fetch(`http://localhost:7071/api/users/${userId}/gifts`)
            response = { response: await apiResponse.text() }
            console.log(response)
        } catch (error) {
            console.error(error)
            throw new Error('Error during fetch')
        }

        return response;
    }
}