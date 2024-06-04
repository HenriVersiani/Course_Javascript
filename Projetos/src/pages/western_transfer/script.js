import { getTransfersAPI } from "../../services/getTransfersAPI.js";

async function main(){
    const result = await getTransfersAPI()
    console.log(result)
}

main()