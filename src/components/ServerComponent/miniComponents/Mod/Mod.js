import React, { useState, useEffect } from 'react';
import { graphql, compose, Mutation } from 'react-apollo';

// queries
import {
  GET_MOD,
  DEL_MOD,
  UPDATE_MOD,
} from '../../../../queries';

// components
import Loading from '../../../Loading';
import QueryComp from '../../../QueryComponent/Query';

import './Mod.css';

const Mod = ({ server: { id, name } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState([]);
  const [selectedMod, setSelected] = useState();

  // error states
  const [deleted, setDeleted] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [noModSelected, setModSelected] = useState(false);

  // success states
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    console.log('%c[cycycy bot] => ', 'color:green', `Fetching roles from guild: ${id}`);
    const fetchRoles = () => fetch('http://localhost:5000/api/discord/getroles', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
      }),
    })
      .then(res => res.json())
      .then((resRoles) => {
        console.log('%c[cycycy bot] => ', 'color:green', 'Fetched roles: ', resRoles);
        setRoles(resRoles);
        setIsLoading(false);
      });

    fetchRoles();
  }, [id]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="server-home-contents">
      {
      isLoading
        ? <Loading />
        : (
          <div className="mod-container">
            <QueryComp query={GET_MOD} variables={{ serverID: id }}>
              {({ mod }) => (
                <>
                  {
                      deleted
                        ? <div className="alert-deleted">Mod role deleted</div>
                        : (
                          <>
                            {
                              notFound
                                ? <div className="alert-deleted">Mod role not found</div>
                                : null
                          }
                          </>
                        )
                    }
                  {
                      noModSelected
                        ? <div className="alert-deleted">No Mod selected!</div>
                        : null
                    }
                  {
                      success
                        ? <div className="alert-success">Mod set successfully!</div>
                        : null
                    }
                  <div className="mod-header">
                    <h1>Edit Moderator</h1>
                    <h4>Update or Delete moderator role</h4>
                  </div>
                  <div className="box">
                    <select onChange={handleChange} defaultValue={mod ? mod.modName : '1'}>
                      <option value={1} disabled>Select Role...</option>
                      {
                          roles.map(role => (
                            <option
                              value={role.id}
                              key={role.id}
                              style={{ color: `#${role.color.toString(16)}` }}
                            >
                              {`${role.name}`}
                            </option>
                          ))}
                    </select>
                  </div>
                  <div className="mod-footer">
                    <Mutation mutation={DEL_MOD}>
                      {delMod => (
                        <button
                          onClick={() => {
                            delMod({ variables: { serverID: id } })
                              .then(({ data }) => {
                                if (data.delMod) {
                                  setSuccess(false);
                                  setNotFound(false);
                                  setModSelected(false);
                                  return setDeleted(true);
                                }
                                setDeleted(false);
                                setSuccess(false);
                                setModSelected(false);
                                return setNotFound(true);
                              });
                          }}
                          className="delete"
                          type="submit"
                        >
                            Delete
                        </button>
                      )}
                    </Mutation>
                    <Mutation mutation={UPDATE_MOD}>
                      {addMod => (
                        <button
                          className="update"
                          onClick={() => {
                            if (selectedMod !== undefined) {
                              return addMod({
                                variables: {
                                  serverID: id,
                                  serverName: name,
                                  modName: selectedMod,
                                },
                              }).then(() => {
                                setDeleted(false);
                                setNotFound(false);
                                setModSelected(false);
                                return setSuccess(true);
                              });
                            }
                            setDeleted(false);
                            setNotFound(false);
                            setSuccess(false);
                            return setModSelected(true);
                          }}
                        >
                            Update
                        </button>
                      )}
                    </Mutation>
                  </div>
                </>
              )
            }
            </QueryComp>
          </div>
        )
      }
    </div>
  );
};

export default compose(
  graphql(GET_MOD, { name: 'getModQuery' }),
)(Mod);
