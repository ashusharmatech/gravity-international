import React from 'react';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Button = ({ styles }) => (
  
	<button
		type="button"
		className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
		onClick={() => openInNewTab('https://www.1mg.com/manufacturer/daffoworth-pharmaceutical-pvt-ltd-79011')}
	>
		Get Started
	</button>
);

export default Button;
