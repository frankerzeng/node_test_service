/**
 * Created by Frank on 2017/9/22.
 */
import {baseUrl} from './../config/env';
import Vue from 'vue';
export const getList = (page) => Vue.http.get(baseUrl + '/list', {page: page});
