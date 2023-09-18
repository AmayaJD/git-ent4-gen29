import React from 'react'

const portalRoot = document.getElementById('portal')

const Portal = () => {

    constructor(){
        super();
        this.el = document.createElement('div');
    }

    componetDidMount = () => {
        portalRoot.appendChild(this.el);
    }

    componetWillUnmount = () => {
        portalRoot.appendChild(this.el);
    }
  return (
    <div>Portal</div>
  )
}

export default Portal