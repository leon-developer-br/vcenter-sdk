import { HostClient, SessionClient } from './clients';

async function init(): Promise<void> {
  try {
    // SessionClient.create('lpereira@trtrio', 'braveTECH#99');
    HostClient.list();
  } catch (error) {
    console.log(error);
  }
}

init();
