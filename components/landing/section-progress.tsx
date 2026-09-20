const SectionProgress = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed left-5 top-1/2 z-30 hidden h-40 w-0.75 -translate-y-1/2 lg:block xl:left-8"
        >
            <div className="sk-rail size-full overflow-hidden rounded-pill">
                <div className="sk-rail-fill size-full rounded-pill" />
            </div>
        </div>
    )
}

export { SectionProgress }
