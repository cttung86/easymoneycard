export default function handler(req, res) {
  if (req.method === 'POST') {
    const { user, amount } = req.body;
    console.log(`Admin Notification: User ${user} topped up $${amount}`);
    // Here you could trigger email/telegram notification with real backend service
    res.status(200).json({ message: 'Notification sent' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
