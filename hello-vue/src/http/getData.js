/**
 * Created by Frank on 2017/9/19.
 */
import fetch from './fetch';

export const getList = page => fetch('/list', {page: page});
