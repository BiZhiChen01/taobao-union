import request from '../libs/http';

const BASE_URL = 'https://api.sunofbeach.net/shop',
      SUCCESS_CODE = 10000;

export default {
    SUCCESS_CODE,
    getCategories() {
        return request.requestGet(BASE_URL + '/discovery/categories');
    },
    getCategoryContent(materialId, page) {
        return request.requestGet(BASE_URL + "/discovery/" + materialId + "/" + page);
    },
    getRecommendCategory() {
        return request.requestGet(BASE_URL + "/recommend/categories");
    },
    getRecommendContent(categoryId) {
        return request.requestGet(BASE_URL + "/recommend/" + categoryId);
    }
}