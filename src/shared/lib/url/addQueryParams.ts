export function getQueryParams(params: RecordOptional<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if(value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`
}

export function addQueryParams(params: RecordOptional<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
//
// Function for adding params in URL
//

