import { Provider } from 'next-auth/client'

export default function AppProvider({children, pageProps}) {
    return (
        <Provider session={pageProps.session}>
            {children}
        </Provider>
    )
}