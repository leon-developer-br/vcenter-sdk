import http from '../http';
import { IVirtualMachine } from '../types';

const url = 'rest/vcenter/vm';

class VirtualMachineClient {
  static async list(): Promise<IVirtualMachine[]> {
    const { data } = await http.get(url);
    console.log(data.value);
    return data.value;
  }

  static async get(id: string): Promise<IVirtualMachine> {
    const { data: hardware } = await http.get(`${url}/${id}/hardware`);
    console.log(hardware.value);

    const { data: cdrom } = await http.get(`${url}/${id}/hardware/cdrom`);
    console.log(cdrom.value);

    const { data: cpu } = await http.get(`${url}/${id}/hardware/cpu`);
    console.log(cpu.value);

    const { data: memory } = await http.get(`${url}/${id}/hardware/memory`);
    console.log(memory.value);

    const { data: disk } = await http.get(`${url}/${id}/hardware/disk`);
    console.log(disk.value);

    const { data: ethernet } = await http.get(`${url}/${id}/hardware/ethernet`);
    console.log(ethernet.value);

    const { data: networking } = await http.get(`${url}/${id}/guest/networking`);
    console.log(networking.value);

    const { data: identity } = await http.get(`${url}/${id}/guest/identity`);
    console.log(identity.value);

    const { data: filesystem } = await http.get(`${url}/${id}/guest/local-filesystem `);
    console.log(filesystem.value);

    const { data: routes } = await http.get(`${url}/${id}/guest/networking/routes`);
    console.log(routes.value);

    const { data: power } = await http.get(`${url}/${id}/guest/power`);
    console.log(power.value);

    const { data: tools } = await http.get(`${url}/${id}/tools`);
    console.log(tools.value);

    return {};
  }
}

export default VirtualMachineClient;
