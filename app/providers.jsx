'use client'

const Providers = ({ children }) => {
    return (
        <>
        <Toaster position='top-center' />
        {children}
        </>
    )
}
export default Providers;