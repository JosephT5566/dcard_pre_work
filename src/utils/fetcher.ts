export async function fetcher<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url, {
            method: 'GET',
        })
        if (!response.ok) {
            const errResp = await response.json()
            console.log(errResp)
            throw response.status
        }
        return (await response.json()) as T
    } catch (error) {
        throw error
    }
}
