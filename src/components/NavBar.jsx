
import '../Navbar.css'
import CartWidget from './CartWidget';
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


const NavBar = () => {

    const indices = ["inicio", "nosotros", "productos", "contacto"];

    return (
        <>
            <h3>brand del proyecto</h3>
            <Image
                borderRadius='full'
                boxSize='150px'
                src='https://resources.cdn.seon.io/uploads/2021/05/E-commerce_fraud_05_26_isolated.png'
                alt='Dan Abramov'
            />
            <ul className="nav">
                {indices.map((cat, index) => (
                    <li key={index} className="nav2"><Button colorScheme='teal' size='sm'>
                    <a href="">{cat}</a></Button></li>
                ))
                }
                <CartWidget />
            </ul>

        </>
    );
}

export default NavBar;

