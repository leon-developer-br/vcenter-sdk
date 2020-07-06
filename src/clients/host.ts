import http from '../http';
import { IHost } from '../types';

const url = 'vcenter/host';

class HostClient {
  static async list(): Promise<IHost[]> {
    const { data } = await http.get(url);
    console.log(data.value);
    return data.value;
  }
}

export default HostClient;
