function GoogleIcon({
    icon,
    className,
}: {
    icon: string;
    className?: string;
}): JSX.Element {
    return (
        <span className={`material-symbols-outlined text-white ${className}`}>
            {icon}
        </span>
    );
}

export default GoogleIcon;
