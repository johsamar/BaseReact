

const HandlerGET = async ({ request }) => {
    return await request().then((response) => {
        return response.data.results;
    }).catch((error) => {
        return error;
    }
    );

}
// const HandlerGETWitParams = async ({ request, params }) => {
//     return await request(params).then((response) => {
//         return response.data.results;
//     }).catch((error) => {
//         return error;
//     }
//     );

// }

const HandlerPOST = async ({ request, body }) => {
    return await request(body).then((response) => {
        return response.data.results;
    }).catch((error) => {
        return error;
    }
    );

}



export { HandlerGET, HandlerPOST }
