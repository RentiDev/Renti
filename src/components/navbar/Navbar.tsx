import Container from "../Container"
import Logo from "./Logo"
import NavLinks from "./Navlinks"
import UserMenu from "./UserMenu"

const Navbar =() => {
    return (
        <div className="fixed w-full z-10">
            <div className="
                py-4
                "
            >
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-evenly
                            gap:
                            "
                    >
                        <Logo />
                        <NavLinks />
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;