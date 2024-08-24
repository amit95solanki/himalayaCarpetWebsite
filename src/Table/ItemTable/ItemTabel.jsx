/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';

import { useTable, usePagination, useSortBy, useRowSelect } from 'react-table';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CustomHeader } from '../../components/CustomHeader';
// import { useNotification } from '../../../../../_components/alertNotification/AlertNotification';
// import { NoRecordsFoundMessage, PleaseWaitMessage } from '../../../../helpers';
// import ItemsPerPage from './ItemPerPage';
import ActionCell from './ActionCell';
// import { useAuth } from '../../../../../app/modules/auth';
import { useUIContext } from '../ItemsUIContext';
import { RenderPagination } from './renderPagination';
import { CustomRow } from '../tableHelperComponent/CustomRow';

// import { ListLoading } from '../Component/loading/ListLoading';
// import { Loader } from '../../../../../_components/Loader';
// import { StatusDisplayCell, StatusBadge } from '../../../../../_components/StatusDisplay/index';
// import PleaseSearchImage from '../../../../../_components/PleaseSearchCommponent/pleaseSearchImage';
// import { AdvanceFilter } from '../Component/advanceFilter/advanceFilter';

const ItemsTable = React.memo(
  ({ uiHelpers, actions, columns, entityName, customFetchAction = null, actionsColumnFormatter, setSearchField }) => {
    const pageSizeOptions = [...uiHelpers.sizePerPageList.map((i) => i.value)];
    const [isMsgDisplayed, setIsMsgDisplayed] = useState(false);
    const [selectedPageSize, setSelectedPageSize] = useState(pageSizeOptions[0]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [sortorder, setSortOrder] = useState('asc');
    const [hasData, setHasData] = useState(false);
    const dispatch = useDispatch();
    // const { addNotification } = useNotification();
    const UIContext = useUIContext();
    const UIProps = useMemo(() => {
      return {
        ids: UIContext.ids,
        setIds: UIContext.setIds,
        selectedData: UIContext.selectedData,
        setSelectedData: UIContext.setSelectedData,
        queryParams: UIContext.queryParams,
        setQueryParams: UIContext.setQueryParams,
        openCloneItemDialog: UIContext.openCloneItemDialog,
        openEditItemPage: UIContext.openEditItemPage,
        openDocumentPage: UIContext.openDocumentPage,
        openHealthPage: UIContext.openHealthPage,
        openDetalisPage: UIContext.openDetalisPage,
        openDeleteItemDialog: UIContext.openDeleteItemDialog,
        openRoleAssignmentPage: UIContext.openRoleAssignmentPage,
        openDeleteItemsDialog: UIContext.openDeleteItemsDialog,
        openUpdateItemsStatusDialog: UIContext.openUpdateItemsStatusDialog,
        showStatus: UIContext.showStatus,
        showEditButton: UIContext.showEditButton,
        showDetailButton: UIContext.showDetailButton,
        showDeleteButton: UIContext.showDeleteButton,
        showActionButtons: UIContext.showActionButtons,
        showCloneButton: UIContext.showCloneButton,
        showSelectCheckbox: UIContext.showSelectCheckBox,
        showSelectAllCheckbox: UIContext.showSelectAllCheckbox,
        showHealthButton: UIContext.showHealthButton,
        showDocumentButton: UIContext.showDocumentButton,
      };
    }, [UIContext]);
    // const { currentUser } = useAuth();
    // let rouvrDefaultRole = currentUser?.rouvrDefaultRole ?? 'null';

    const { totalCount, entities, listLoading, success, errors, workflowData } = useSelector(
      (state) => ({
        totalCount: state[uiHelpers.StateName].totalCount,
        entities: entityName ? state[uiHelpers.StateName][entityName] : state[uiHelpers.StateName].entities,
        listLoading: state[uiHelpers.StateName].listLoading,
        success: state[uiHelpers.StateName].success,
        errors: state[uiHelpers.StateName].error,
        workflowData: state[uiHelpers.StateName].approverData,
      }),
      shallowEqual
    );

    useEffect(() => {
      UIProps.setIds([]);
      if (customFetchAction) {
        dispatch(actions[`${customFetchAction}`]?.(UIProps.queryParams));
      } else {
        if (actions.fetchItems) {
          dispatch(actions.fetchItems(UIProps.queryParams));
        }
        if (actions.fetchApprovers) {
          dispatch(actions.fetchApprovers());
        }
      }
    }, [UIProps.queryParams]);

    useEffect(() => {
      if (totalCount) {
        setSearchField(totalCount);
      }
      // if (success && !isMsgDisplayed) {
      //   addNotification('success', success);
      //   setIsMsgDisplayed(true);
      // } else if (errors?.clientMessage && !isMsgDisplayed) {
      //   addNotification('error', errors.clientMessage);
      //   setIsMsgDisplayed(true);
      // }
      setTimeout(() => {
        setIsMsgDisplayed(false);
      }, 5000);
    }, [success, errors, totalCount]);

    useEffect(() => {}, [workflowData]);

    const actionColumns = UIProps.showActionButtons
      ? [
          {
            Header: (props) => <CustomHeader tableProps={props} title="Actions" className="text-center min-w-100px" />,
            accessor: 'actions',
            Cell: (cellProps) => (
              <ActionCell
                actionColumnsFormatter={actionsColumnFormatter}
                openEditItemPage={UIProps.openEditItemPage}
                openDetalisPage={UIProps.openDetalisPage}
                openDocumentPage={UIProps.openDocumentPage}
                openHealthPage={UIProps.openHealthPage}
                openDeleteItemDialog={UIProps.openDeleteItemDialog}
                openUpdateItemsStatusDialog={UIProps.openUpdateItemsStatusDialog}
                openCloneItemDialog={UIProps.openCloneItemDialog}
                pageName={uiHelpers.PageName}
                showEditButton={UIProps.showEditButton}
                showHealthButton={UIProps.showHealthButton}
                showDocumentButton={UIProps.showDocumentButton}
                showDetailButton={UIProps.showDetailButton}
                showDeleteButton={UIProps.showDeleteButton}
                showCloneButton={UIProps.showCloneButton}
                rouvrDefaultRole="admin"
                permissions={[]}
                rowIndex={1}
                workflowData={workflowData}
                id={cellProps.cell.row.original.id}
                memberType={
                  uiHelpers.PageName === 'User'
                    ? cellProps.cell.row.original.memberType ?? 'employee'
                    : cellProps.cell.row.original.memberType
                }
                Status={cellProps.cell.row.original.dataStatus}
                {...cellProps}
              />
            ),
          },
        ]
      : [];

    let newColumn;
    if (UIProps.showStatus === 'none') {
      newColumn = [...columns, ...actionColumns];
    } else {
      newColumn = [...columns, ...actionColumns];
    }

    const data = useMemo(() => (!entities ? [] : entities), [entities]);
    const usersColumns = useMemo(() => newColumn, []);
    const {
      getTableProps,
      getTableBodyProps,
      prepareRow,
      headerGroups,
      page,
      rows,
      canPreviousPage,
      canNextPage,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      toggleAllRowsSelected,
      state: { pageIndex, pageSize, sortBy, sortOrder, selectedRowIds },
    } = useTable(
      {
        columns: usersColumns,
        data,
        initialState: {
          pageIndex: 0,
          pageSize: selectedPageSize,
          sortBy: [],
          sortOrder: 'asc',
        },
      },
      useSortBy,
      usePagination,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          {
            id: 'selection',
            Header: () => (
              <th className="w-10px pe-2">
                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        toggleAllRowsSelected(true);
                        UIProps.setIds(data.map((item) => item.id));
                      } else {
                        toggleAllRowsSelected(false);
                        UIProps.setIds([]);
                      }
                    }}
                  />
                </div>
              </th>
            ),
            Cell: ({ row }) => (
              <td>
                <div className="form-check form-check-sm form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={row.isSelected}
                    onChange={(e) => {
                      toggleAllRowsSelected(false);
                      row.toggleRowSelected();
                      let selectedData = [];
                      if (e.target.checked) {
                        selectedData = [...UIProps.ids, row.original.id];
                      } else {
                        selectedData = UIProps.ids.filter((id) => id !== row.original.id);
                      }
                      UIProps.setIds(selectedData);
                    }}
                  />
                </div>
              </td>
            ),
          },
          ...columns,
        ]);
      }
    );

    return (
      <>
        {/* {listLoading && (
          <Loader>
            <ListLoading />
          </Loader>
        )} */}
        <div className="row">
          <div className="col-lg-12">
            {/* <AdvanceFilter uiProps={UIProps} actions={actions} entityName={entityName} /> */}
          </div>
          <div className="col-lg-12">
            <div className="card card-xxl-stretch mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold fs-3 mb-1">{uiHelpers.PageName} </span>
                </h3>
              </div>
              <div className="card-body py-3">
                <div className="table-responsive">
                  <table id="kt_table_users" className="table align-middle gs-0 gy-4" {...getTableProps()}>
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                              {column.render('Header')}
                              <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody className="text-gray-600 fw-bold" {...getTableBodyProps()}>
                      {page.length > 0 ? (
                        page.map((row, i) => {
                          prepareRow(row);
                          return <CustomRow row={row} key={`row-${i}-${row.id}`} />;
                        })
                      ) : (
                        <tr>
                          <td colSpan={7}>
                            <div className="d-flex">
                              {/* <PleaseSearchImage /> */}
                              <p>please search image</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  {/* {page.length > 0 && (
                    <RenderPagination
                      pageIndex={currentPageIndex}
                      pageCount={Math.ceil(totalCount / selectedPageSize)}
                      canPreviousPage={canPreviousPage}
                      canNextPage={canNextPage}
                      gotoPage={gotoPage}
                      nextPage={nextPage}
                      previousPage={previousPage}
                      totalCount={totalCount}
                      selectedPageSize={selectedPageSize}
                    />
                  )} */}
                </div>
                <div>
                  {UIProps.ids.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-danger me-1"
                      onClick={() => {
                        UIProps.setIds([]);
                        toggleAllRowsSelected(false);
                      }}
                    >
                      <i className="bi bi-x-circle-fill fs-3">@</i> Clear Selections
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export { ItemsTable };
