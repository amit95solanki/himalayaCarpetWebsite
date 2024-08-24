import React, { useEffect, useMemo, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useUIContext } from './ItemsUIContext';

import { ModalProgressBar } from '../components/ModalProgressBar';

export const ItemDeleteDialog = ({ id, uiHelpers, show, onHide, actions }) => {
  // UI Context'
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      setIds: uiContext.setIds,
      queryParams: uiContext.queryParams,
    };
  }, [uiContext]);

  useEffect(() => {
    if (!id) {
      // setShouldCloseModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state[uiHelpers.StateName].actionsLoading }), // Add the type for 'state'
    shallowEqual
  );

  // if !id we should close modal

  // looking for loading/dispatch
  useEffect(() => {
    // Add your code logic here if needed
  }, [isLoading, dispatch]);

  const deleteItem = () => {
    // server request for deleting item by id
    if (id) {
      dispatch(actions.deleteItem(id)).then(() => {
        // refresh list after deletion
        dispatch(actions.fetchItems(uiProps.queryParams));
        // clear selections list
        uiProps.setIds([]);
        // closing delete modal
        onHide();
      });
    } else {
      onHide();
    }
  };

  // Redux state
  return (
    <>
      <Modal show={show} onHide={onHide} aria-labelledby="item-modal-sizes-title-lg">
        {isLoading && <ModalProgressBar variant="query" />}
        <Modal.Header closeButton>
          <Modal.Title id="item-modal-sizes-title-lg">{uiHelpers.PageName} Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isLoading && <span>Are you sure to permanently delete this {uiHelpers.PageName}?</span>}
          {isLoading && <span>{uiHelpers.PageName} is deleting...</span>}
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button type="button" onClick={onHide} className="btn btn-light btn-elevate">
              Cancel
            </button>
            <> </>
            <button type="button" onClick={deleteItem} className="btn btn-delete btn-elevate">
              Delete
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
