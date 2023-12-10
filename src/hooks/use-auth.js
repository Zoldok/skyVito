

export function useAuth() {
    // const {email, token, id} = useSelector(state => state.user)
    const email = localStorage.getItem('email') || '';
    return {
        isAuth: !!email,
        email,
    }
}