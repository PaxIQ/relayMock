# Relay Mock

This is a simple script intended to simulate a booking payload from the relay.

## Requirements

- Node.js >= v9
- A Videcom token registered with Pivot

## Install Node

Use [NVM](https://github.com/creationix/nvm#installation)

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install node
```

## Install Script

```bash
git clone git@github.com:PaxIQ/relayMock.git
cd relayMock
npm i
```

## Use

```bash
node ./sendMock.js yourWebhookURL Videcom-Airline Videcom-Token RLOC
```

- `yourWebhookURL` This is the URL that will receive the messages.
- `Videcom-Airline` This is the airline name assigned to you by Videcom.
- `Videcom-Token` This is the token that Videcom assigned to you.
- `RLOC` The record locator for the booking you want to simulate.
