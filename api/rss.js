export default async function handler(req, res) {
  const url = "https://feeds.podcastics.com/podcastics/podcasts/rss/7543_22adb373093deb54e1ec644c2a7adec7.rss";

  try {
    const response = await fetch(url);
    const xml = await response.text();

    const items = xml.split("<item>");
    const episodes = [];

    for (let i = 1; i < items.length; i++) {
      const item = items[i];
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1];
      const audioUrl = item.match(/<enclosure url="(.*?)"/)?.[1];

      if (title && audioUrl) {
        episodes.push({ title, url: audioUrl });
      }
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(episodes);
  } catch (e) {
    res.status(500).json({ error: "Erreur lors du chargement du flux RSS." });
  }
}
