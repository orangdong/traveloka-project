import {GoogleAuth} from 'google-auth-library'
const auth = new GoogleAuth();

const collabModelUrl = process.env.COLLAB_MODEL_URL;

const collabModel = async (userId) => {
    try{
        const url = `${collabModelUrl}/${userId}`;
        
        const client = await auth.getIdTokenClient(collabModelUrl);
        const response = await client.request({url});
        
        const recommendations = response.data.output;

        return recommendations;
    }catch(e){
        throw e;
    }
}

export {collabModel}