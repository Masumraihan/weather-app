import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
    return (
        <div className="bg-[#343A40] py-6 text-white">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-lg">Copyright &copy; all right reverse</p>
                    </div>
                    <div className="flex gap-x-3">
                        <FaGithub size={26} />
                        <FaLinkedin size={26} />
                        <FaTwitter size={26} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;