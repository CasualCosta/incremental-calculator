import { SiKofi, SiTwitter, SiGithub } from 'react-icons/si'

const Links = () => {
    const ICON_SIZE = 32
    return (
        <div
            className='flex flex-col gap-4 justify-center'
        >
            <a href='https://twitter.com/CasualCosta' target='_blank'><SiTwitter size={ICON_SIZE} /></a>
            <a href='https://github.com/CasualCosta/incremental-calculator' target='_blank'><SiGithub size={ICON_SIZE} /></a>
            <a href='https://ko-fi.com/casualcosta' target='_blank'><SiKofi size={ICON_SIZE} /></a>
        </div>
    )
}

export default Links