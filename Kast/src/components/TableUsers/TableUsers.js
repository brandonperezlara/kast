//make up the users table
import React, { memo, useContext } from "react";
import { GlobalContext } from "../../context";
import DropdownMenu from 'emerald-ui/lib/DropdownMenu';
import DropdownItem from 'emerald-ui/lib/DropdownItem';
import IconButton from 'emerald-ui/lib/IconButton';
import { DeleteSubs} from "../../store/Actions";


function Tasks ({ subs }) {

  const { dispatch } = useContext(GlobalContext);

  const deleteUser = async (sub, userid) => {
    const user = {};
 
    user._id = userid
   
    await DeleteSubs(user ,dispatch);
    };

  const getSubs = () => {
    try {
      let result = subs.map(sub => (
        <DropdownItem key={sub._id} >
          {sub.name}
            <IconButton 
              key={sub._id} 
              icon="delete" 
              style={{ float: 'right'}} 
              onClick={e => deleteUser(sub.name,sub._id)}
            />
          </DropdownItem>
        ));
      return result;
    } catch (error) { 
    }};
  return (
    <>
      <div style={{ position: 'relative' }}>
        <DropdownMenu  style={{ display: 'block' , position: 'initial' }}>
          {getSubs()}
        </DropdownMenu>
      </div>
      <div style={{ height: '185px' }} />
    </>
  );
}
export default memo(Tasks);
