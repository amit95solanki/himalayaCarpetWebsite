import React, { createContext, useContext, useState, useCallback } from 'react';
import { isEqual, isFunction } from 'lodash';

const UIContext = createContext(undefined);

export function useUIContext() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('');
  }
  return context;
}

export const ItemsUIConsumer = UIContext.Consumer;

export function ItemsUIProvider({ initialFilter, UIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }
      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }
      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    selectedData,
    setSelectedData,
    setQueryParams,
    newItemButtonClick: UIEvents.newItemButtonClick,
    openCloneItemDialog: UIEvents.openCloneItemDialog,
    openEditItemPage: UIEvents.openEditItemPage,
    openDetalisPage: UIEvents.openDetalisPage,
    openDocumentPage: UIEvents.openDocumentPage,
    openHealthPage: UIEvents.openHealthPage,
    openDeleteItemDialog: UIEvents.openDeleteItemDialog,
    openDeleteItemsDialog: UIEvents.openDeleteItemsDialog,
    openFetchItemsDialog: UIEvents.openFetchItemsDialog,
    openUpdateItemsStatusDialog: UIEvents.openUpdateItemsStatusDialog,
    openRoleAssignmentPage: UIEvents.openRoleAssignmentPage,
    openMultipeItemsStatusUpdate: UIEvents.openMultipeItemsStatusUpdate,
    showActionButtons: UIEvents.showActionButtons,
    showAddButton: UIEvents.showAddButton,
    showCloneButton: UIEvents.showCloneButton,
    showDeleteButton: UIEvents.showDeleteButton,
    showEditButton: UIEvents.showEditButton,
    showDetailButton: UIEvents.showDetailButton,
    allowMutlipeStatusUpdate: UIEvents.allowMutlipeStatusUpdate,
    showStatus: UIEvents.showStatus,
    allowMultipleDeleteItems: UIEvents.allowMultipleDeleteItems,
    showSelectAllCheckbox: UIEvents.showSelectAllCheckbox,
    showSelectCheckBox: UIEvents.showSelectCheckBox,
    showImportCSV: UIEvents.showImportCSV,
    showDocumentButton: UIEvents.showDocumentButton,
    showHealthButton: UIEvents.showHealthButton,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
