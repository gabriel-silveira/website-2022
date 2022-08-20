import React from 'react';

function MainMenuItem(props: { label: string }) {
  return (
    <div>
      <hr />
      <div className="py-2 hover:bg-slate-200 text-sm cursor-pointer">
        {props.label}
      </div>
    </div>
  )
}

export default MainMenuItem
