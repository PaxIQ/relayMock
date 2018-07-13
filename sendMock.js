'use strict';

const axios = require('axios');
const { Client } = require('pivot-client');

const [ , , webhook, airline, token, rloc ] = process.argv;

if (!rloc || !token || !airline || !webhook)
  return console.log(`syntax :: node ./sendMock.js yourWebhookURL Videcom-Airline Videcom-Token RLOC`);

const pivot = new Client({
  url: `https://api-test.paxiq.com/pivot/1.0`,
  airline,
  token
});

console.log(`reading booking :: ${rloc}`);
pivot.booking(rloc)
  .then((res) => {
    const booking = res.data.result.booking.data;
    const raw = res.data.result.raw;

    console.log(`building payload...`);
    return {
      xpnrreportid: Math.floor(Math.random() * 999) + 100,
      xpnrdatetime: `17/04/2018 17:10:00`, // static
      timestamp: new Date().toJSON(),
      booking,
      raw
    };
  })
  .then((payload) => {
    console.log(`posting payload to webhook :: ${webhook} ${payload.xpnrreportid}`);

    return axios.post(webhook, payload);
  })
  .then((result) => {
    console.log(`Payload posted!`);
    console.log(result.data);
  })
  .catch((err) => console.log(err));
