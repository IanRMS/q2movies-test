import Api from "../services/api"
import { apikey } from "../utils/constants"

export const getMovies = async (index: number):Promise<any> => {
    const response = Api.get(`upcoming?api_key=${apikey}&language=pt-BR&page=${index}`)
    return response
}