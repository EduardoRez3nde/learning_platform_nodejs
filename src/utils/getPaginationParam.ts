

export const getPaginationParam = (query: any): [page: number, perPage: number] => {
    
    const { page, perPage } = query;
    
    const pageValidation = typeof page === "string" && parseInt(page, 10) > 0
    ? parseInt(page, 10) : 1;

    const perPageValidation = typeof perPage === "string" && parseInt(perPage, 10) > 10 ? parseInt(perPage, 10) : 10;

    return [pageValidation, perPageValidation];
}