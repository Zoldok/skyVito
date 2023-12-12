export function useAuth() {
    // const {email, token, id} = useSelector(state => state.user)
    // const email = localStorage.getItem('email') || '';
    const token = localStorage.getItem('access_token') || ''

    return {
        isAuth: !!token,
        token
        
    }
}