import axios from 'axios';
import queryString from 'query-string';
import { NetworkInterface, NetworkGetQueryInterface } from 'interfaces/network';
import { GetQueryInterface } from '../../interfaces';

export const getNetworks = async (query?: NetworkGetQueryInterface) => {
  const response = await axios.get(`/api/networks${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createNetwork = async (network: NetworkInterface) => {
  const response = await axios.post('/api/networks', network);
  return response.data;
};

export const updateNetworkById = async (id: string, network: NetworkInterface) => {
  const response = await axios.put(`/api/networks/${id}`, network);
  return response.data;
};

export const getNetworkById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/networks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNetworkById = async (id: string) => {
  const response = await axios.delete(`/api/networks/${id}`);
  return response.data;
};
