import { HostClient, VirtualMachineClient, SessionClient } from './clients';

async function init(): Promise<void> {
  try {
    /*
      const key = await SessionClient.create('lpereira@trtrio', '??');
      console.log(key);
    */
    // VirtualMachineClient.get('vm-13218');

    HostClient.list();
    // HostClient.get('host-93238');
  } catch (error) {
    console.log(error);
  }
}

init();
