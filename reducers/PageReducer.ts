export function PageReducer(state:any, action:any) {
    switch (action.type) {
        case "SET_PAGE_DATA":
            return { ...state, pageData: action.payload };
        case "SET_UPDATED_PAGE_DATA":
            return { ...state, updatedPageData: action.payload };
        case "SET_SELECTED_SECTION":
            return { ...state, selectedSection: action.payload };
        case "SET_OPTION_CHANGE":
            return { ...state, heroBannerOption: action.payload };
        case "SET_IS_LOADING":
            return { ...state, isLoading: action.payload };
        case "SET_IS_DELETE_MODAL_OPEN":
            return { ...state, isDeleteModalOpen: action.payload };
        case "SET_SECTION_ID":
            return { ...state, sectionId: action.payload };
        case "IS_ANCHOR_NAV_EXPANDED":
            return { ...state, isAnchorNavExpanded: action.payload };
        case "DISPLAY_NAV_CONTENT":
            return { ...state, displayNavContent: action.payload };
    }
}
