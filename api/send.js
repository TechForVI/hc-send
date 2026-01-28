export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body;
        
        const BOT_TOKEN = "8167956673:AAEvwwm-vre-8dHJN50wyIplizrZLUlF9Ts";
        const CHAT_ID = "7476240210";
        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });

        const result = await response.json();

        if (result.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ success: false });
        }

    } catch (error) {
        return res.status(500).json({ success: false });
    }
}