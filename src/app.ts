import { VirtualMachineClient } from './clients';

async function init(): Promise<void> {
  try {
    // SessionClient.create('lpereira@trtrio');
    VirtualMachineClient.get('vm-13218');
  } catch (error) {
    console.log(error);
  }
}

init();
