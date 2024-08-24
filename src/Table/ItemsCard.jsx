import { useMemo, useState, useEffect } from 'react';
import { useUIContext, ItemsTable } from '.';

// import { useAuth } from '../../../../app/modules/auth';
// import { userRoles } from '../../../../_components/constant';
// import { MenuComponent } from '../../../assets/ts/components';
// import ImportCVSComponent from '../../../../app/ImportAndExport/Import/ImportComponent';

export const ItemsCard = ({
  uiHelpers,
  columns,
  actions,
  entityName,
  customFetchAction,
  actionsColumnFormatter,
  importValidateColumn,
  CustomItemsFilter,
  setSearchField,
  seachField,
  addButtonName,
}) => {
  const [showImportCSV, setShowImportCSV] = useState(false);
  // const { currentUser } = useAuth();
  const [searchedButtonClicked, setSearchedButtonClicked] = useState(false);
  // let rouvrDefaultRole = currentUser?.rouvrDefaultRole ?? 'null';
  const UIContext = useUIContext();

  const UIProps = useMemo(() => {
    return {
      ids: UIContext.ids,
      queryParams: UIContext.queryParams,
      setQueryParams: UIContext.setQueryParams,
      newItemButtonClick: UIContext.newItemButtonClick,
      openCloneItemDialog: UIContext.openCloneItemDialog,
      openDeleteItemsDialog: UIContext.openDeleteItemsDialog,
      openEditItemPage: UIContext.openEditItemPage,
      openDetalisPage: UIContext.openDetalisPage,
      openDocumentPage: UIContext.openDocumentPage,
      openHealthPage: UIContext.openHealthPage,
      openUpdateItemsStatusDialog: UIContext.openUpdateItemsStatusDialog,
      openFetchItemsDialog: UIContext.openFetchItemsDialog,
      openRoleAssignmentPage: UIContext.openRoleAssignmentPage,
      showActionButtons: UIContext.showActionButtons,
      showAddButton: UIContext.showAddButton,
      showCloneButton: UIContext.showCloneButton,
      showEditButton: UIContext.showEditButton,
      showDetailButton: UIContext.showDetailButton,
      showDeleteButton: UIContext.showDeleteButton,
      showStatus: UIContext.showStatus,
      showImportCSV: UIContext.showImportCSV,
      showDocumentButton: UIContext.showDocumentButton,
      showHealthButton: UIContext.showHealthButton,
    };
  }, [UIContext]);

  // useEffect(() => {
  //   MenuComponent.reinitialization();
  // }, []);

  const SubmitClicked = (condition) => {
    setSearchedButtonClicked(condition);
  };

  return (
    <>
      <ItemsTable
        uiHelpers={uiHelpers}
        columns={columns}
        actions={actions}
        entityName={entityName}
        customFetchAction={customFetchAction}
        actionsColumnFormatter={actionsColumnFormatter}
        setSearchField={setSearchField}
      />
    </>
  );
};
