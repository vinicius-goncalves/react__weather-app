import { type MouseEvent } from 'react';
import { tv } from 'tailwind-variants';
import GoogleIcon from '../GoogleIcon';

interface Props {
    icon: string;
    onClick?: (event: MouseEvent) => void;
}

const twClasses = tv({
    slots: {
        wrapper:
            'background-transparent border-none text-white/90 transition-opacity duration-200 flex justify-center items-center hover:opacity-75 hover:cursor-pointer',
    },
})();

const { wrapper } = twClasses;

function SearchOptions({ icon, onClick }: Props): JSX.Element {
    return (
        <>
            <button className={wrapper()} type="button" onClick={onClick}>
                <GoogleIcon icon={icon} />
            </button>
        </>
    );
}

export default SearchOptions;
