import { Fragment, type MouseEvent } from 'react';
import './search-options.css';

type TSearchOptions = {
    icon: string;
    onClick?: (event: MouseEvent) => void;
};

function SearchOptions({ icon, onClick }: TSearchOptions): JSX.Element {
    return (
        <Fragment>
            <button
                className="search-options-btn"
                type="button"
                onClick={onClick}>
                <span className="material-symbols-outlined search-options-icon">
                    {icon}
                </span>
            </button>
        </Fragment>
    );
}

export default SearchOptions;
