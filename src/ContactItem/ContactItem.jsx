import React from "react";
import PropTypes from 'prop-types';

import {Name, Tel, DeleteBtn} from './ContactItem.styled';

export default function ContactItem({name, number, onClick}) {
  return (
    <>
      <Name>{name}</Name>
      <Tel>{number}</Tel>
      <DeleteBtn
        type='button'
        onClick={onClick}
      >Delete</DeleteBtn>
    </>
  )
}

ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired
}
