import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">EduStipend</Navbar.Brand>
				<Nav className="me">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#about">About </Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
					<Nav.Link href="#services">Services</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
