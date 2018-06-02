export const SORT_BY_ACTIONS = {
    SORT_BY: 'sortBy.sortBy',
}

export const sortBy = (sortBy) => ({
    type: SORT_BY_ACTIONS.SORT_BY,
    payload: sortBy
});