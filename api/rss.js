export default async function handler(req, res) {
  const response = await fetch('https://feeds.podcastics.com/podcastics/podcasts/rss/7543_22adb373093deb54e1ec644c2a7adec7.rss');
  const data = await response.text();

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(data);
}
