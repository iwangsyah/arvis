import { Api } from '../../configs';
import BaseApi from './BaseApi';

export default class ApiService {
  static getPartner = () => BaseApi().get(`${Api.URL_DATASET}/partner.json`);
  static getSeeOn = () => BaseApi().get(`${Api.URL_DATASET}/seen_on.json`);
  static getAlumniReport = () => BaseApi().get(`${Api.URL_DATASET}/alumni-report.json`);
  static getListCourse = () => BaseApi().get(`${Api.URL_DATASET}/list-course.json`);
  static getDetailCourse = () => BaseApi().get(`${Api.URL_DATASET}/detail-course.json`);
}
