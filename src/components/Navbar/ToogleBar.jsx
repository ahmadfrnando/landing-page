// eslint-disable-next-line no-unused-vars
import React from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
import ResponsiveNav from './ResponsiveNav';
import { IoClose } from "react-icons/io5";

const ToogleBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2 text-secondary border-4 border-secondary rounded-lg">
        {!open ? <HiMiniBars3 /> : <IoClose />}
      </button>
      {open && <ResponsiveNav />}
    </div>
  );
};

export default ToogleBar;
