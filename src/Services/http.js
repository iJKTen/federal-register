const completeEndPoint = (url) => `https://www.federalregister.gov${url}`;

const get = async (endpoint) => {
    const url = completeEndPoint(endpoint);
    const response = await fetch(url);
    const responseData = await response.json();

    return {
        statusCode: response.status,
        data: responseData
    }
}

export default get;
