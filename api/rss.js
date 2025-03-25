export default async function handler(req, res) {
  const response = await fetch('https://www.podcastics.com/podcast/rss/7543');
  const data = await response.text();

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(data);
}
