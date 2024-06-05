import { Fragment, type MouseEvent } from 'react';
// import './search-options.css';

type TSearchOptions = {
    icon: string;
    onClick?: (event: MouseEvent) => void;
};

function SearchOptions({ icon, onClick }: TSearchOptions): JSX.Element {
    return (
        <Fragment>
            <button
                className="background-transparent border-none text-white/90 transition-opacity duration-200 flex justify-center items-center hover:opacity-75 hover:cursor-pointer"
                type="button"
                onClick={onClick}>
                <span className="material-symbols-outlined">{icon}</span>
            </button>
        </Fragment>
    );
}

export default SearchOptions;
