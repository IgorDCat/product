import {getQueryParams} from 'shared/lib/url/addQueryParams';


describe('addQueryParams.test', () => {
    test('test with one parameter', () => {
        const params = getQueryParams({test: 'value'});
        expect(params).toBe('?test=value')
    });
    test('test with many parameters', () => {
        const params = getQueryParams({test: 'value', test1: 'value1'});
        expect(params).toBe('?test=value&test1=value1')
    });
    test('test with undefined', () => {
        const params = getQueryParams({test: 'value', test1: undefined});
        expect(params).toBe('?test=value')
    });
})