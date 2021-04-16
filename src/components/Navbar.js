import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
	//Constants
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		if(window.innerWidth <= 960){
			setButton(false)
		} else {
			setButton(true)
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className="navbar-container">
					<Link to="/thecatsproject/" className="navbar-logo" onClick={closeMobileMenu}>
						The Cats Project 
						<i className="fab fa-typo3" />
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/thecatsproject/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/thecatsproject/fame' className='nav-links' onClick={closeMobileMenu}>
								Hall of Fame
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/thecatproject/about' className='nav-links' onClick={closeMobileMenu}>
								About the Project
							</Link>
						</li>
						<li>
							<Link
								to='/thecatsproject/pictures'
								className='nav-links-mobile'
								onClick={closeMobileMenu}
							>
								Pictures Of Cats
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline' buttonLink='/thecatsproject/pictures'>PICTURE OF CATS</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;