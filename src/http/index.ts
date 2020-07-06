import axios from 'axios';

const http = axios.create({
  baseURL: 'https://vcenter6.trtrio.gov.br',
  headers: {
    'vmware-api-session-id': '34f505a701f968ef876861ca55b4546d',
  },
});

export default http;
