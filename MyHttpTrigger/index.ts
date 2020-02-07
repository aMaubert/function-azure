import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {axiosService} from './request';

const API_URL =  process.env.API_URL || 'https://esgi-al-group-pq-api-app-aservice.azurewebsites.net';

const uri = '/toilet-paper';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const toiletPaper = req.body;

    if (toiletPaper && req.method === 'POST') {
        //const response = await axiosService().post(`${API_URL}${uri}`, toiletPaper);
        const response  = await axiosService().post(`${API_URL}${uri}`, toiletPaper);
        context.res = {
            // status: 200, /* Defaults to 200 */
            status: response.status
        };
        return;
    }
    context.res = {
        status: 400,
        body: "Bad request"
    };

};

export default httpTrigger;
