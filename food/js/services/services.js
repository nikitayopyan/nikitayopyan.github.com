async function postData(url, data) {
    let result = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await result.json();
}


export default postData;