import {
  CapacitorHttp,
  HttpHeaders,
  HttpOptions,
  HttpParams,
} from "@capacitor/core";

export const httpGet = function (
  url: string,
  headers: HttpHeaders,
  data: Record<string, unknown>,
  params: HttpParams
) {
  return CapacitorHttp.get({ url, headers, data, params });
};

export const httpPost = function (
  url: string,
  headers: HttpHeaders,
  data: Record<string, unknown>,
  params: HttpParams
) {
  return CapacitorHttp.post({ url, headers, data, params });
};

export const httpPut = function (
  url: string,
  headers: HttpHeaders,
  data: Record<string, unknown>,
  params: HttpParams
) {
  return CapacitorHttp.put({ url, headers, data, params });
};
export const httpPatch = function (
  url: string,
  headers: HttpHeaders,
  data: Record<string, unknown>,
  params: HttpParams
) {
  return CapacitorHttp.patch({ url, headers, data, params });
};

export const httpDelete = function (
  url: string,
  headers: HttpHeaders,
  data: Record<string, unknown>,
  params: HttpParams
) {
  return CapacitorHttp.delete({ url, headers, data, params });
};

export const httpRequest = function (httpOptions: HttpOptions) {
  return CapacitorHttp.request(httpOptions);
};
