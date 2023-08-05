import ENDPOINTS from "modules/api/endpoints";

const BASE_URL = "https://5f7998dbe402340016f9321f.mockapi.io/providers";

class Api {
  constructor(baseUrl, endpoints) {
    this.baseUrl = baseUrl;
    this.endpoints = endpoints;
  }

  async generateRequest(endpoint, data) {
    const { uri, method } = this.endpoints[endpoint];

    return fetch(`${this.baseUrl}${uri}`, { method });
  }

  async fetch(endpoint) {
    const response = await this.generateRequest(endpoint);

    return response.json()
  }
}

export default new Api(BASE_URL, ENDPOINTS)