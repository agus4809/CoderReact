
import '../Navbar.css'
import CartWidget from './CartWidget';
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = () => {

    
    return (
        <>
            <h3>brand del proyecto</h3>
            <Link to="/">
            <Image 
                borderRadius='full'
                boxSize='150px'
                src='https://resources.cdn.seon.io/uploads/2021/05/E-commerce_fraud_05_26_isolated.png'
                alt='Dan Abramov'
            />
            </Link>
                <Menu>
                    <Link to={"/discos"}>
                        <MenuButton as={Button} >
                            Catalogo
                        </MenuButton>
                    </Link>
                    
                </Menu> 
                <Menu> 

                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Genero
                    </MenuButton>
                        <MenuList>
                            <Link to={`/genero/${"Rock"}`}>
                            <MenuItem>Rock</MenuItem>
                            </Link>
                            
                            <Link to={`/genero/${"pop"}`}>
                            <MenuItem>pop</MenuItem>
                            </Link>
                            
                            <Link to={`/genero/${"cumbia"}`}>
                            <MenuItem>cumbia</MenuItem>
                            </Link>
                            
                        </MenuList>
                </Menu>     
                    <Menu>
                        <Link to={"/contacto"}>
                        <MenuButton as={Button} >
                            Contacto
                        </MenuButton>   
                        </Link>
                                         
                    </Menu>
            <Menu>
            <CartWidget />
            </Menu>
            

        </>
    );
}

export default NavBar;

