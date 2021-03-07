const completeEndPoint = (url) => `https://www.federalregister.gov${url}`;

const get = async (endpoint) => {
    const url = completeEndPoint(endpoint);
    const response = await fetch(url);
    return await response.json();
}

export default get;
