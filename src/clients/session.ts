import http from '../http';

const url = '/com/vmware/cis/session ';

class SessionClient {
  static async create(email: string, password: string): Promise<void> {
    const { data } = await http.post(url, {}, { auth: { username: email, password } });
    return data.value;
  }
}

export default SessionClient;
