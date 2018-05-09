const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C9F0AEGQ7';

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage({
  channel: conversationId,
  text: 'It\'s taco time!',
  attachments: [
    {
      "fallback": "Required plain-text summary of the attachment.",
      "color": "#36a64f",
      "author_name": "Tommy Taco",
      "author_link": "https://imgur.com/r/tacos/TIUrPQl",
      "author_icon": "https://imgur.com/r/tacos",
      "title": "Taco Taco",
      "title_link": "http://www.tacospin.com/",
      "text": "A taco a day keeps the munchies at bay.",
      "fields": [
        {
          "title": ":taco:",
          "value": "High",
          "short": false
        }
      ],
      "image_url": "http://my-website.com/path/to/image.jpg",
      "thumb_url": "http://example.com/path/to/thumb.png",
      "footer": "Slack API",
      "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
      "ts": 123456789
    }
  ]
})
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
