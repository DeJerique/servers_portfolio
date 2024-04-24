
const SocialIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://twitter.com/de_jerique"
                target='_blank'
                rel="noreferrer"
            >
                <img alt="twitter-icon" src="../assets/x-twitter.svg" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/chigozie-daniel-8b0238282"
                target='_blank'
                rel="noreferrer"
            >
                <img alt="linkedin-icon" src="../assets/linkedin-in.svg" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://wa.me/message/ETNCOOGNK746L1"
                target='_blank'
                rel="noreferrer"
            >
                <img alt="whatsapp-icon" src="../assets/whatsapp.svg" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.tiktok.com/@decruz1.2?is_from_webapp=1&sender_device=pc"
                target='_blank'
                rel="noreferrer"
            >
                <img alt="menu-icon" src="../assets/tiktok.svg" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="mailto:codewizard016@gmail.com"
                target='_blank'
                rel="noreferrer"
            >
                <img alt="menu-icon" src="../assets/envelope-regular.svg" />
            </a>
        </div>
    )
}

export default SocialIcons;