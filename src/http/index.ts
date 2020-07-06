import axios from 'axios';

const http = axios.create({
  baseURL: 'https://vcenter6.trtrio.gov.br/rest',
  headers: {
    'vmware-api-session-id': '83745944a77ffdacdf68b88919969b99',
  },
});

export default http;
