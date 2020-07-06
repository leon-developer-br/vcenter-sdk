import http from '../http';
import { IVirtualMachine } from '../types';

const url = 'vcenter/vm';

class VirtualMachineClient {
  static async list(): Promise<IVirtualMachine[]> {
    const { data } = await http.get(url);
    console.log(data.value);
    return data.value;
  }
}

export default VirtualMachineClient;
