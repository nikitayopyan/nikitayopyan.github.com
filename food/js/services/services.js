const postData = async function (url, data) {
    let result = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await result.json();
}

async function getData(url) {
    let result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Эта ссылка ${url} не работает, ${result.status}`)
    }

    return await result.json();
}

export {postData};
export {getData};