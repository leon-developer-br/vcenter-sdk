import http from '../http';
import { IHost } from '../types';

const restUrl = '/rest/vcenter/host';
const apiURL = '/api/esx/hosts';

class HostClient {
  static async list(): Promise<IHost[]> {
    const { data } = await http.get(restUrl);
    console.log(data.value);
    return data.value;
  }

  static async get(id: string): Promise<IHost[]> {
    const { data: components } = await http.get(`${apiURL}/${id}/software/installed-components`);
    console.log(components);

    return components;
  }
}

export default HostClient;
