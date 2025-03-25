export default async function handler(req, res) {
  const response = await fetch('https://feed.ausha.co/YPwzEUG09qYN');
  const data = await response.text();

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(data);
}
