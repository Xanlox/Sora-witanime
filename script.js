async function getData(url) {
    const res = await req(url);
    const doc = parseHTML(res);

    const animeList = [];

    const items = doc.querySelectorAll('.anime-card-container');
    for (const item of items) {
        const name = item.querySelector('h3').textContent.trim();
        const link = item.querySelector('a').href;
        const image = item.querySelector('img').src;

        animeList.push({
            name,
            image,
            url: link
        });
    }

    return animeList;
}