import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemsCard, ItemDeleteDialog, ItemsDeleteDialog, ItemsUpdateStatusDialog, ItemsUIProvider } from '.';
// import { useAuth } from '../../../../app/modules/auth';

export const ItemsList = ({
  actions,
  uiHelpers,
  columns,
  entityName = null,
  customFetchAction = null,
  allowMutlipeStatusUpdate = false,
  allowMultipleDeleteItems = true,
  showSelectAllCheckbox = true,
  showSelectCheckBox = true,
  showAddButton = true,
  showDocumentButton = false,
  showHealthButton = false,
  showEditButton = true,
  showDeleteButton = true,
  showDetailButton = false,
  showStatus = 'nonclickable',
  showCloneButton = false,
  actionsColumnFormatter = null,
  importValidateColumn = [],
  showActionButtons = true,
  CustomItemsFilter = null,
  showImportCSV = true,
  addButtonName = 'Add',
  ...props
}) => {
  const [slug] = useState(window.location.pathname);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [deleteItemsId, setDeleteItemsId] = useState(null);
  const [StatusItemId, setStatusItemId] = useState(null);
  const [seachField, setSearchField] = useState('all');
  const navigate = useNavigate();
  // const { currentUser } = useAuth();
  // let rouvrDefaultRole = currentUser?.rouvrDefaultRole ?? 'null';

  const rouvrDefaultRole = 'null';

  const UIEvents = {
    newItemButtonClick: () => {
      navigate(`${slug}/addnew`);
    },

    openEditItemPage: (id) => {
      navigate(`${slug}/edit/${id}`);
    },
    openDetalisPage: (id) => {
      navigate(`${slug}/detail/${id}`);
    },
    openDocumentPage: (id) => {
      navigate(`${slug}/document/${id}`);
    },
    openHealthPage: (id) => {
      navigate(`${slug}/health/${id}`);
    },
    openDeleteItemDialog: (id) => {
      // navigate(`${slug}/${id}/delete`)
      setDeleteItemId(id);
    },
    openDeleteItemsDialog: () => {
      setDeleteItemsId('true');
      // navigate(`${slug}/delete`)
    },
    openFetchItemsDialog: () => {
      navigate(`${slug}/fetch`);
    },
    openUpdateItemsStatusDialog: (id) => {
      setStatusItemId(id);
    },
    openRoleAssignmentPage: (id) => {
      navigate(`${slug}/${id}/assignment`);
    },

    showActionButtons,
    showAddButton,
    showCloneButton,
    showDeleteButton,
    showEditButton,
    showDetailButton,
    showStatus,
    allowMutlipeStatusUpdate,
    allowMultipleDeleteItems,
    showSelectAllCheckbox,
    showSelectCheckBox,
    showImportCSV,
    showHealthButton,
    showDocumentButton,
  };

  return (
    <>
      <ItemsUIProvider initialFilter={uiHelpers.initialFilter} UIEvents={UIEvents}>
        {deleteItemId && (
          <ItemDeleteDialog
            uiHelpers={uiHelpers}
            actions={actions}
            show={deleteItemId !== null}
            id={deleteItemId}
            onHide={() => {
              setDeleteItemId(null);
              navigate(slug);
            }}
          />
        )}
        {deleteItemsId && (
          <ItemsDeleteDialog
            uiHelpers={uiHelpers}
            actions={actions}
            show={deleteItemsId != null}
            onHide={() => {
              setDeleteItemsId(null);
              navigate(slug);
            }}
          />
        )}
        {StatusItemId && (
          <ItemsUpdateStatusDialog
            actions={actions}
            StatusItemId={StatusItemId}
            rouvrDefaultRole={rouvrDefaultRole}
            uiHelpers={uiHelpers}
            renderItems={(item, index) => (
              <div className="list-timeline-item mb-3" key={item.id}>
                <span className="list-timeline-text">
                  <span className="label label-lg label-inline">{index + 1}</span>
                  {/* <span className="ml-5">{item.textField}</span> */}
                </span>
              </div>
            )}
            statusData={[
              { label: '--Select--', value: '' },
              { label: 'Approved', value: 'Approved' },
              { label: 'Reject', value: 'Reject' },
            ]}
            show={StatusItemId !== null}
            onHide={() => {
              navigate(slug);
              setStatusItemId(null);
            }}
          />
        )}

        <ItemsCard
          uiHelpers={uiHelpers}
          actions={actions}
          columns={columns}
          entityName={entityName}
          CustomItemsFilter={CustomItemsFilter}
          customFetchAction={customFetchAction}
          importValidateColumn={importValidateColumn}
          actionsColumnFormatter={actionsColumnFormatter}
          setSearchField={setSearchField}
          seachField={seachField}
          addButtonName={addButtonName}
          {...props}
        />
      </ItemsUIProvider>
    </>
  );
};
