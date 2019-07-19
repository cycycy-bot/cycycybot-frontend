import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import {
  GET_BANPHRASE,
  ADD_BANPHRASE,
  DEL_BANPHRASE,
} from '../../../../queries';
import QueryComp from '../../../QueryComponent/Query';
import Modal from '../../../Modal';

import './Banphrase.css';

const Banphrase = ({ server: { id } }) => {
  const [bpValue, setBanPhrase] = useState('');
  const [isOpen, setModal] = useState(false);
  const [bpModal, setBpModal] = useState({});

  const showModal = () => {
    setModal(!isOpen);
  };

  const showBpModal = (bpId) => {
    setBpModal({
      [bpId]: true,
    });
  };

  const closeBpModal = (bpId) => {
    setBpModal({
      [bpId]: false,
    });
  };

  const handleBpValue = (e) => {
    setBanPhrase(e.target.value);
  };

  return (
    <div className="server-home-contents">
      <QueryComp query={GET_BANPHRASE} variables={{ serverID: id }}>
        {({ banphrases }) => (
          <div className="banphrase-container">
            <div className="banphrase-header">
              <h1>Banphrase</h1>
              <h4>Add some moderation in your discord server!</h4>
            </div>
            <div className="banphrases">
              <div className="banphrase-add">
                <Mutation
                  mutation={ADD_BANPHRASE}
                  refetchQueries={() => [{
                    query: GET_BANPHRASE,
                    variables: {
                      serverID: id,
                    },
                  }]}
                >
                  {(addBanPhrase) => {
                    const handleAdd = () => {
                      if (bpValue.length >= 1) {
                        addBanPhrase({
                          variables: {
                            serverID: id,
                            banphrase: bpValue,
                          },
                        })
                          .then((res) => {
                            if (res) {
                              showModal();
                            }
                          });
                      }
                    };

                    return (
                      <>
                        <button
                          className="update"
                          onClick={showModal}
                        >
                            Add
                        </button>
                        <Modal
                          show={isOpen}
                          close={showModal}
                          onSaveClick={handleAdd}
                          classN="update"
                          btnName="Save"
                        >
                          <h2>Add a banphrase</h2>
                          <h5>Word to be banned</h5>
                          <input
                            type="text"
                            className="modal-input"
                            onChange={e => handleBpValue(e)}
                            value={bpValue}
                          />
                        </Modal>
                      </>
                    );
                  }}
                </Mutation>
              </div>
              {
                  banphrases.map(banphrase => (
                    <Mutation
                      key={banphrase.id}
                      mutation={DEL_BANPHRASE}
                      refetchQueries={() => [{
                        query: GET_BANPHRASE,
                        variables: {
                          serverID: id,
                        },
                      }]}
                    >
                      {(delBanPhrase) => {
                        const handleDelete = () => {
                          delBanPhrase({
                            variables: {
                              serverID: id,
                              banphrase: banphrase.banphrase,
                            },
                          });
                        };

                        return (
                          <div className="banphrase">
                            <span>{banphrase.banphrase}</span>
                            <div className="spacer" />
                            <button
                              className="delete"
                              onClick={() => showBpModal(banphrase.id)}
                            >
                              delete
                            </button>
                            <Modal
                              show={bpModal[banphrase.id]}
                              close={() => closeBpModal(banphrase.id)}
                              onSaveClick={() => handleDelete(banphrase.id)}
                              classN="delete"
                              btnName="Delete"
                            >
                              <h3>Are you sure you want to delete this ban phrase?</h3>
                            </Modal>
                          </div>
                        );
                      }}
                    </Mutation>
                  ))
                 }
            </div>
          </div>
        )}
      </QueryComp>
    </div>
  );
};

export default Banphrase;
