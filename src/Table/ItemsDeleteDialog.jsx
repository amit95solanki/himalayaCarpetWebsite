import React, { useEffect, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { AnyAction } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useUIContext } from './ItemsUIContext';
import { ModalProgressBar } from '../components/ModalProgressBar';

export const ItemsDeleteDialog = ({ uiHelpers, show, onHide, actions }) => {
  const uiContext = useUIContext();

  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      setIds: uiContext.setIds,
      queryParams: uiContext.queryParams,
    };
  }, [uiContext]);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state[uiHelpers.StateName].actionsLoading }),
    shallowEqual
  );

  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    if (!uiProps.ids || uiProps.ids.length === 0) {
      onHide();
    }
  }, [uiProps.ids]);

  const handleDeleteItems = () => {
    dispatch(actions.deleteItems(uiProps.ids)).then(() => {
      dispatch(actions.fetchItems(uiProps.queryParams)).then(() => {
        uiProps.setIds([]);
        onHide();
      });
    });
  };

  return (
    <>
      <Modal show={show} onHide={onHide} aria-labelledby="item-modal-sizes-title-lg">
        {isLoading && <ModalProgressBar />}
        <Modal.Header closeButton>
          <Modal.Title id="item-modal-sizes-title-lg">{uiHelpers.PageName} Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isLoading && <span>Are you sure to permanently delete selected {uiHelpers.PageName}?</span>}
          {isLoading && <span>{uiHelpers.PageName} are deleting...</span>}
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button type="button" onClick={onHide} className="btn btn-light btn-elevate">
              Cancel
            </button>
            <> </>
            <button type="button" onClick={handleDeleteItems} className="btn btn-primary btn-elevate">
              Delete
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
