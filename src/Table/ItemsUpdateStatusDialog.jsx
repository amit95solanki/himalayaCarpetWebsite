import React, { useEffect, useState, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useUIContext } from './ItemsUIContext';

const selectedItems = (entities, ids) => {
  const _Items = [];
  ids.forEach((id) => {
    const item = entities.find((el) => el.id === id);
    if (item) {
      _Items.push(item);
    }
  });
  return _Items;
};

export const ItemsUpdateStatusDialog = ({
  uiHelpers,
  show,
  StatusItemId,
  onHide,
  renderItems,
  actions,
  statusData,
  workFlowApproval,
  rouvrDefaultRole,
}) => {
  const uiContext = useUIContext();

  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      setIds: uiContext.setIds,
      queryParams: uiContext.queryParams,
    };
  }, [uiContext]);

  const [remark, setRemark] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const updateStatus = () => {
    // server request for updating item by ids
    if (!remark) {
      setError('Please Enter Remark');
      setTimeout(() => {
        setError('');
      }, 1500);
      return;
    }

    if (!status) {
      setError('Please Select the Status');
      setTimeout(() => {
        setError('');
      }, 1500);
      return;
    }

    dispatch(actions.updateItemsStatus([StatusItemId], status, remark)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchItems(uiProps.queryParams)).then(() => {
        // clear selections list
        uiProps.setIds([]);
        // closing delete modal
        onHide();
      });
    });
  };

  const handleChnageRemark = (e) => {
    setRemark(e.target.value);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} aria-labelledby="item-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="item-modal-sizes-title-lg">Update the Approval Status</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overlay overlay-block cursor-default px-6 py-1">
          {error && <div style={{ color: 'red' }}>{error}</div>}

          <textarea
            className="form-control form-control-flush mb-3"
            onChange={(e) => handleChnageRemark(e)}
            data-kt-element="input"
            placeholder="Type a Remark"
            value={remark}
          />
        </Modal.Body>
        <Modal.Footer className="form">
          <div className="form-group">
            <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
              {statusData &&
                statusData.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <button type="button" onClick={onHide} className="btn btn-light btn-elevate">
              Cancel
            </button>
            <> </>
            <button type="button" onClick={() => updateStatus()} className="btn btn-primary btn-elevate">
              Update Status
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
